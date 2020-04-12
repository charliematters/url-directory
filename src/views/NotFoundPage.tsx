// Libraries
import React from 'react'
import { Breadcrumb, Button, Container, Divider, Grid, Header, Icon, Message } from 'semantic-ui-react'

// Components
import EntryList from '../components/EntryList'

export interface Props {
  query: string
  suggestions: Entry[]
}

export default function NotFound({ query, suggestions }: Props) {
  return (
    <Container className="main">
      <Grid stackable>
        <Grid.Column width={12} className="constrained">
          <Breadcrumb size="massive">
            <Breadcrumb.Section href="/">Shortcuts</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>{query}</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
          <Button primary fluid size="small" href={`/create?shortcut=${query}`}>
            <Icon name="plus" /> New shortcut
          </Button>
        </Grid.Column>
      </Grid>
      <Divider hidden />
      <Message icon size="large">
        <Icon name="question circle outline" />
        <Message.Content>
          <Message.Header>
            No shortcut for &ldquo;<strong>{query}</strong>&rdquo; found
          </Message.Header>
          You can <a href={`/create?shortcut=${query}`}>create one</a>, or add it manually to a{' '}
          <a href="/config">config file</a>
        </Message.Content>
      </Message>
      {suggestions.length ? (
        <>
          <Divider hidden />
          {suggestions.length ? <Header>Did you mean:</Header> : null}
          <EntryList entries={suggestions} />
        </>
      ) : null}
    </Container>
  )
}
