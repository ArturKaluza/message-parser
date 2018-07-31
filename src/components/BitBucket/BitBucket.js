import React, { Component } from 'react';
import axios from 'axios';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import './BitBucket.css';

import Commit from '../Commit/Commit';

class BitBucket extends Component {
  constructor() {
    super()

    this.state = {
      commits: [],
      activeTask: false,
      repoName: '',
      isLoading: true
    }

    this.fetchCommits = this.fetchCommits.bind(this);
    this.randomNum = this.randomNum.bind(this);
    this.loader = this.loader.bind(this);
    this.renderBitBucket = this.renderBitBucket.bind(this);
  }

  componentDidMount() {
    this.fetchCommits();
  }

  componentWillReceiveProps(newProps) {
    this.setState({activeTask: newProps.handleActiveTask})
  }

  fetchCommits() {
    axios.get('https://api.bitbucket.org/2.0/repositories/ArturKaluza/testRepo/commits')
      .then(response => {
        const arr = response.data.values.map(commit => {
          const date = {}
          
          date.sha = commit.hash;
          date.message = commit.message;
          date.taskID = this.randomNum()
                  
        return date;
        })
        this.setState({commits: arr, repoName: response.data.values[0].repository.name, isLoading: false})
      })
  }

  loader() {
    return (
      <Segment>
        <Dimmer inverted active={this.state.isLoading}>
          <Loader />
        </Dimmer>
      </Segment>
    )    
  }

  randomNum() {
    return Math.floor(Math.random() * 3) + 1;
  }

  renderBitBucket() {
    return (
      <div>
      {this.state.commits.map((item, index) => <Commit 
        key={index}
        id={item.sha}
        message={item.message}
        activeTask ={this.state.activeTask}
        taskID={item.taskID}
        />
      )}
    </div>
    )
  }

  render() {
    return (
      <div>
        <div className='column__header'>
          <h2>BitBucket</h2>
          <h3>Repozitory name: {this.state.repoName}</h3>
      </div>
        {this.state.isLoading ? this.loader() : this.renderBitBucket()}
      </div>
    )
  }
}

export default BitBucket;