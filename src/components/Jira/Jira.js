import React, { Component } from 'react';
import axios from 'axios';
import './Jira.css';

class Jira extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      activeTask: false
    }

    this.checkActiveTask = this.checkActiveTask.bind(this);
    this.getProjectList = this.getProjectList.bind(this);
  }
  
  componentDidMount() {
    this.checkActiveTask();
    this.getProjectList();

  }

  componentWillReceiveProps(newProps) {
    this.setState({activeTask: newProps.handleActiveTask})
  }

  checkActiveTask() {
    this.setState({activeTask: this.props.handleActiveTask})
    
  }

  getProjectList() {
    axios.get('https://supportdesk.almservices.pl/rest/api/2/project/', {
      headers: {
        Authorization: 'Basic YXJ0dXIua2FsdXphOmFzZHp4YzEx'
      }
    }).then(res => {
      const projectArray = []

      projectArray.push(res.data[2], res.data[8], res.data[9]);
      this.setState({projects: projectArray})
     
    })
  }
   

  render() {
    return (
      <div className='Jira'>
        <div className='column__header'>
          <h2>Jira</h2>
        </div>
  
        <div className='Jira__list'>
          {this.state.projects.map((item, index) => <div 
            className={this.state.activeTask === (index + 1) ? 'Jira__item list-item__active' : 'Jira__item'}
            key={index}
            onClick={() => this.props.jiraTask(index + 1)}
            > 
            {item.name}

          </div>
          )}
        </div>

      {/* //   <div className='Jira__list'>
      //     <div className={this.state.activeTask === 1 ? 'Jira__item list-item__active' : 'Jira__item'} onClick={() => this.props.jiraTask(1)}>Task 1</div>
      //     <div className={this.state.activeTask === 2 ? 'Jira__item list-item__active' : 'Jira__item'}  onClick={() => this.props.jiraTask(2)}>Task 2</div>
      //     <div className={this.state.activeTask === 3 ? 'Jira__item list-item__active' : 'Jira__item'} onClick={() => this.props.jiraTask(3)}>Task 3</div>
      //   </div> */}
      </div>
    )
  }  
}

export default Jira;