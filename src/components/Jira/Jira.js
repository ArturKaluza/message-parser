import React, { Component } from 'react';
import './Jira.css';

class Jira extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTask: false
    }

    this.checkActiveTask = this.checkActiveTask.bind(this);
  }
  
  componentDidMount() {
    this.checkActiveTask();
  }

  componentWillReceiveProps(newProps) {
    this.setState({activeTask: newProps.handleActiveTask})
}

  checkActiveTask() {
    this.setState({activeTask: this.props.handleActiveTask})
    
  }

  render() {
    return (
      <div className='Jira'>
        <div className='Jira__title'>
          <h2>Jira</h2>
        </div>
  
        <div className='Jira__list'>
          <div className={this.state.activeTask === 1 ? 'Jira__item active' : 'Jira__item'} onClick={() => this.props.jiraTask(1)}>Task 1</div>
          <div className={this.state.activeTask === 2 ? 'Jira__item active' : 'Jira__item'}  onClick={() => this.props.jiraTask(2)}>Task 2</div>
          <div className={this.state.activeTask === 3 ? 'Jira__item active' : 'Jira__item'} onClick={() => this.props.jiraTask(3)}>Task 3</div>
        </div>
      </div>
    )
  }  
}

export default Jira;