// Libraries
import React from 'react'
import { Breadcrumb, Button, Container, Divider, Grid, Icon } from 'semantic-ui-react'

// Components
import EntryList from '../components/EntryList'

export interface Props {
  entries: Entry[]
}

export default function NotFound({ entries }: Props) {
  return (
    <Container className="main">
      <Grid stackable>
        <Grid.Column width={12}>
          <Breadcrumb size="massive">
            <Breadcrumb.Section>Shortcuts</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
          <Button primary fluid size="small" href="/create">
            <Icon name="plus" /> New shortcut
          </Button>
        </Grid.Column>
      </Grid>
      <Divider hidden />
      <EntryList entries={entries} />
    </Container>
  )
}
