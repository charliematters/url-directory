// Libraires
import React from 'react'
import path from 'path'
import express from 'express'
import Handlebars from 'handlebars'
import bodyParser from 'body-parser'
import ReactDOMServer from 'react-dom/server'

// Helpers
import { readFile } from './helpers/ReadFile'
import { getConfig } from './helpers/GetConfig'
import { saveEntry } from './helpers/SaveEntry'
import { getEntries } from './helpers/GetEntries'
import { getUrlFromQuery } from './helpers/GetUrlFromQuery'
import { getSuggestedEntries } from './helpers/GetSuggestedEntries'

// Pages
import Home from './views/HomePage'
import ErrorPage from './views/ErrorPage'
import CreatePage from './views/CreatePage'
import ConfigPage from './views/ConfigPage'
import CreatedPage from './views/CreatedPage'
import NotFoundPage from './views/NotFoundPage'

console.log('Starting up')
Promise.all([
  readFile(path.resolve(__dirname, '../static/template.hbs')).then((template) => Handlebars.compile(template)),
  getConfig(),
]).then(([html, config]) => {
  console.log('Loaded Config and Template')

  const render = (element: JSX.Element, name: string) => {
    const component = ReactDOMServer.renderToStaticMarkup(element)
    return html({ name, component })
  }

  const app = express()
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', async function (req, res) {
    const query = req.query.q

    if (!query) {
      const entries = await getEntries()
      return res.send(render(<Home entries={entries} />, 'Shortcuts'))
    }

    if (typeof query !== 'string') return res.send('invalid query')

    let entries: Entry[]
    try {
      entries = await getEntries()
    } catch (error) {
      return res.send(render(<ErrorPage error={error.message} />, `Error / Shortcuts`))
    }

    const url = await getUrlFromQuery(query, entries)

    if (url === null) {
      return res.send(
        render(
          <NotFoundPage query={query} suggestions={getSuggestedEntries(query, entries)} />,
          `${query} / Shortcuts`,
        ),
      )
    }

    res.redirect(url)
  })

  app.get('/create', (req, res) => {
    return res.send(render(<CreatePage />, `New / Shortcuts`))
  })

  app.get('/config', async (req, res) => {
    const config = await getConfig()
    return res.send(
      render(<ConfigPage config={config} pathToData={path.resolve(__dirname, 'data')} />, `Config / Shortcuts`),
    )
  })

  app.post('/create', async (req, res) => {
    const { shortcut, url } = req.body
    try {
      await saveEntry({ url, shortcut })
      return res.send(
        render(<CreatedPage url={url as string} shortcut={shortcut as string} />, `${shortcut} / Shortcuts`),
      )
    } catch (error) {
      return res.send(render(<CreatePage shortcut={shortcut as string} error="Failed" />, `New / Shortcuts`))
    }
  })

  app.use(express.static('public'))

  app.listen(config.port, function () {
    console.log(`Listening on port ${config.port}!`)
  })
})
