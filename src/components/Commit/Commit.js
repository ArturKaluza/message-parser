import React from 'react';
import { List, Image } from 'semantic-ui-react';
import './Commit.css';

const Commit = (props) => {
  return (
    <List.Item className={props.activeTask === props.taskID ? 'list-item__active' : ''}>
      <Image avatar src={props.avatar} size='mini' spaced />
      <List.Content>
        <List.Header as='a'>{props.author} </List.Header>
        <List.Description><b> Message commit: </b>{ props.message }</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default Commit;

