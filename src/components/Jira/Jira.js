import React from 'react';
import './Jira.css';

const Jira = (props) => {
  return (
    <div className='Jira'>
      <div className='Jira__title'>
        <h2>Jira</h2>
      </div>

      <div className='Jira__list'>
        <div className='Jira__item' onClick={() => props.jiraTask(1)}>Task 1</div>
        <div className='Jira__item' onClick={() => props.jiraTask(2)}>Task 2</div>
        <div className='Jira__item' onClick={() => props.jiraTask(3)}>Task 3</div>
      </div>
    </div>
  )
}

export default Jira;