import React from 'react';
import './Commit.css';

const Commit = (props) => {
  return (
    <div className={props.activeTask === props.taskID ? 'Commit active' : 'Commit'}>
      <div className='Commit__message'>Message: {props.message}</div>
      <div className='Commit__title'>Commit id(sha): {props.id}</div>
      <div className='Commit__taskid'>Task id: {props.taskID}</div> 
    </div>
  )
}

export default Commit;

