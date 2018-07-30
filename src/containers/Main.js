import React, { Component } from 'react';
import './Main.css';
import { Grid } from 'semantic-ui-react'

import Slack from '../components/Slack/Slack';
import Github from '../components/Github/Github';
import Jira from '../components/Jira/Jira';

class Main extends Component {
  constructor() {
    super();

    this.state = {};

    this.filterJiraTask = this.filterJiraTask.bind(this);
  }

  filterJiraTask(id) {
    console.log(id);
  }

  render() {
    return (
      <div>
         
         <Grid columns={3} divided>
          <Grid.Row>
            
            <Grid.Column>
              <Jira jiraTask={this.filterJiraTask} />
            </Grid.Column>

            <Grid.Column>
              <Slack />
            </Grid.Column>
            
            <Grid.Column>
              <Github />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      
      </div>
    )
  }
}

export default Main;