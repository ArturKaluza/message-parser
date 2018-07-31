import React, { Component } from 'react';
import './Main.css';
import { Grid } from 'semantic-ui-react'

import Slack from '../components/Slack/Slack';
import Github from '../components/Github/Github';
import BitBucket from '../components/BitBucket/BitBucket';
import Jira from '../components/Jira/Jira';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      activeTask: false
    };

    this.filterJiraTask = this.filterJiraTask.bind(this);
  }

  filterJiraTask(id) {
    this.setState({activeTask: id})
  }

  render() {
    
    return (
      <div>
         
         <Grid columns={4} divided>
          <Grid.Row>
            
            <Grid.Column>
              <Jira jiraTask={this.filterJiraTask} handleActiveTask={this.state.activeTask} />
            </Grid.Column>

            <Grid.Column>
              <Slack />
            </Grid.Column>
            
            <Grid.Column>
              <Github  handleActiveTask={this.state.activeTask} />
            </Grid.Column>

            <Grid.Column>
              <BitBucket  handleActiveTask={this.state.activeTask} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      
      </div>
    )
  }
}

export default Main;