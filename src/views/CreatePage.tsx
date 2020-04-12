// Libraries
import React from 'react'
import { Breadcrumb, Container, Divider, Icon, Message } from 'semantic-ui-react'

// Components
import NewEntryForm from '../components/NewEntryForm'

export interface Props {
  shortcut?: string
  error?: string
  created?: boolean
}

export default function CreatePage({ shortcut = '', error = '' }: Props) {
  let resultDisplay: JSX.Element | null = null
  if (error) {
    resultDisplay = (
      <Message error icon>
        <Icon name="warning sign" />
        <Message.Content>
          <Message.Header>Could not create shortcut</Message.Header>
          {error}
        </Message.Content>
      </Message>
    )
  }

  return (
    <Container className="main">
      <Breadcrumb size="massive">
        <Breadcrumb.Section href="/">Shortcuts</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section>New</Breadcrumb.Section>
      </Breadcrumb>
      <Divider hidden />
      {resultDisplay}
      <NewEntryForm shortcut={shortcut} />
    </Container>
  )
}
