import React, { Component } from 'react';

import Slack from '../components/Slack/Slack';
import Github from '../components/Github/Github';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      commits: []
    }
  }

  render() {
    return (
      <div>
        <p>Main</p>
        <Slack />
        <Github />
      </div>
    )
  }
}

export default Main;