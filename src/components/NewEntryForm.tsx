// Libraries
import React, { useCallback, useState } from 'react'
import { Form, Grid, Icon } from 'semantic-ui-react'

export interface Props {
  shortcut?: string
}

export default function NewEntryForm({ shortcut = '' }: Props) {
  const [currentShortcut, setCurrentShortcut] = useState(shortcut)
  const handleChangedShortcut = useCallback((e) => setCurrentShortcut(e.target.value), [])

  const [currentUrl, setCurrentUrl] = useState('')
  const handleChangedUrl = useCallback((e) => setCurrentUrl(e.target.value), [])

  return (
    <Form action="/create" method="post">
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <Form.Input
              fluid
              required
              autoFocus
              id="shortcut-input"
              name="shortcut"
              label="Shortcut"
              size="large"
              placeholder="e.g. google"
              value={currentShortcut}
              onChange={handleChangedShortcut}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form.Input
              fluid
              required
              id="url-input"
              name="url"
              label="URL"
              size="large"
              placeholder="e.g. https://www.google.com"
              value={currentUrl}
              onChange={handleChangedUrl}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4} floated="right">
            <Form.Button primary fluid>
              Create new shortcut
              <Icon name="arrow right" />
            </Form.Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  )
}
