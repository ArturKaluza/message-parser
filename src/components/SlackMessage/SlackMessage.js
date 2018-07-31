import React from 'react'
import { List } from 'semantic-ui-react';

export default ({ data , activeTask }) => {
  console.log(activeTask)
  return (
    <List.Item key={data.ts} className={activeTask === data.id ? 'list-item__active' : ''}>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{ data.name || ''}</List.Header>
        <List.Description as='a'>{ data.text }</List.Description>
      </List.Content>
    </List.Item>
  )
}