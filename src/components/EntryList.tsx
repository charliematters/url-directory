// Libraries
import React from 'react'
import { List, Segment } from 'semantic-ui-react'

export interface Props {
  entries: Entry[]
}

export default function EntryList({ entries }: Props) {
  return (
    <Segment.Group>
      {entries.map((entry) => (
        <Segment key={entry.url + entry.shortcut}>
          <List.Header>{entry.shortcut}</List.Header>
          <List.Description>
            <a href={entry.url}>{entry.url}</a>
          </List.Description>
        </Segment>
      ))}
    </Segment.Group>
  )
}
