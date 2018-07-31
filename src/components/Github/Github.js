import React, { Component } from 'react';
import axios from 'axios';
import './Github.css';

import Commit from '../Commit/Commit';

class Github extends Component {
  constructor() {
    super()

    this.state = {
      commits: [],
      activeTask: false
    }

    this.fetchCommits = this.fetchCommits.bind(this);
    this.randomNum = this.randomNum.bind(this);
  }

  componentDidMount() {
    this.fetchCommits();
  }

  componentWillReceiveProps(newProps) {
    this.setState({activeTask: newProps.handleActiveTask})
  }

  fetchCommits() {
    axios.get('https://api.github.com/repos/ArturKaluza/alm/commits')
      .then(response => {
        const arr = response.data.map(commit => {
          const date = {}
          
          date.sha = commit.sha;
          date.message = commit.commit.message;
                  
        return date;
        })
        this.setState({commits: arr})
      })
  }

  randomNum() {
    return Math.floor(Math.random() * 3) + 1;
  }

  render() {
    return (
      <div>
        <div className='column__header'>
          <p>Github</p>
        </div>
        {this.state.commits.map((item, index) => <Commit 
          key={index}
          id={item.sha}
          message={item.message}
          activeTask ={this.state.activeTask}
          taskID={this.randomNum()}
          
          />
        )}
      </div>
    )
  }
}

export default Github;


 