// Libraries
import React from 'react'
import { Breadcrumb, Button, Container, Divider, Grid, Icon, Message } from 'semantic-ui-react'

export interface Props {
  url: string
  shortcut: string
}

export default function CreatedPage({ url, shortcut }: Props) {
  return (
    <Container className="main">
      <Grid stackable>
        <Grid.Column width={12}>
          <Breadcrumb size="massive">
            <Breadcrumb.Section href="/">Shortcuts</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>{shortcut || 'New'}</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
          <Button primary fluid size="small" href="/create">
            <Icon name="plus" /> New shortcut
          </Button>
        </Grid.Column>
      </Grid>

      <Divider hidden />
      <Message info icon>
        <Icon name="check" />
        <Message.Content>
          <Message.Header>&ldquo;{shortcut}&rdquo; Shortcut created</Message.Header>
        </Message.Content>
      </Message>
      <section style={{ textAlign: 'center' }}>
        <Button primary className="tertiary" href={url}>
          {url}
        </Button>
      </section>
    </Container>
  )
}
