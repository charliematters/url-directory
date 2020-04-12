// Libraries
import React from 'react'
import { Breadcrumb, Button, Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

export interface Props {
  config: Config
  pathToData: string
}

const format = `interface Shortcut {
  shortcut: string
  url: string
  isRegex: boolean
}`

export default function NotFound({ config, pathToData }: Props) {
  return (
    <>
      <Container className="main">
        <Grid stackable>
          <Grid.Column width={12}>
            <Breadcrumb size="massive">
              <Breadcrumb.Section href="/">Shortcuts</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section>Config</Breadcrumb.Section>
            </Breadcrumb>
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Button primary fluid size="small" href="/create">
              <Icon name="plus" /> New shortcut
            </Button>
          </Grid.Column>
        </Grid>
        <Divider hidden />
        <section>
          <Header>Config file</Header>
          <p>
            Your config file (<b>config.json</b>) can be found in <b>{pathToData}</b>
          </p>
          <p>It is currently set to:</p>
          <pre>{JSON.stringify(config, null, 2)}</pre>
          <p>
            The sources are JSON files containing a list of shortcuts which are imported after the user ones. In all
            cases, the first match wins.
          </p>
        </section>
        <Divider hidden />
        <section>
          <Header>Shortcut Format</Header>
          The format of the shortcuts is as follows:
          <pre>{format}</pre>
          <p>
            Please note, setting <code>isRegex</code> to true will convert &lsquo;shortcut&rsquo; to{' '}
            <code>/^shortcut$/i</code> and will allow a shortcut of &lsquo;google (.*)&rsquo; to have a url of
            &lsquo;https://www.google.com/q=$1&rsquo;
          </p>
        </section>
      </Container>
    </>
  )
}
