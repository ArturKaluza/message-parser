import React from 'react';
import { List } from 'semantic-ui-react';
import './Commit.css';

const Commit = (props) => {
  return (
    <List.Item className={props.activeTask === props.taskID ? 'Commit list-item__active' : 'Commit'}>
      <List.Content>
        <List.Description as='a' className='black'>{ props.message }</List.Description>
      </List.Content>

      <List.Content>
        <List.Header as='a' className='black'>Commit sha(id): { props.id || ''}</List.Header>
      </List.Content>

       <List.Content>
        <List.Description as='a' className='black'>Task ID: { props.taskID }</List.Description>
      </List.Content>
     
    </List.Item>
  )
}

export default Commit;

