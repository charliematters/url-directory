// Libraries
import React from 'react'
import { Breadcrumb, Button, Container, Divider, Grid, Icon, Message } from 'semantic-ui-react'

export interface Props {
  error: string
}

export default function ErrrPage({ error }: Props) {
  return (
    <Container className="main">
      <Grid stackable>
        <Grid.Column width={12}>
          <Breadcrumb size="massive">
            <Breadcrumb.Section href="/">Shortcuts</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>Error</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
          <Button primary fluid size="small" href="/create">
            <Icon name="plus" /> New shortcut
          </Button>
        </Grid.Column>
      </Grid>

      <Divider hidden />
      <Message error icon>
        <Icon name="check" />
        <Message.Content>
          <Message.Header>Something went wrong</Message.Header>
          {error}
        </Message.Content>
      </Message>
    </Container>
  )
}
