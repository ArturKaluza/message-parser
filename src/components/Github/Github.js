import React, { Component } from 'react';

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
    console.log('work')
  }


  render() {
    return (
      <div>
        <p>Github</p>
      </div>
    )
  }
}

export default Github;