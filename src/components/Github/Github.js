import React, { Component } from 'react';
import axios from 'axios';
import './Github.css';

import Commit from '../Commit/Commit';

class Github extends Component {
  constructor() {
    super()

    this.state = {
      commits: []
    }

    this.fetchCommits = this.fetchCommits.bind(this)
  }

  componentDidMount() {
    this.fetchCommits();
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


  render() {
    return (
      <div>
        <div className='column__header'>
          <p>Github</p>
        </div>
        {this.state.commits.map(item => <Commit 
          
          id={item.sha}
          message={item.message}          
          />
        )}
      </div>
    )
  }
}

export default Github;