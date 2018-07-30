import React, { Component } from 'react';
import './Main.css';
import { Grid } from 'semantic-ui-react'

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
         
         <Grid columns={3} divided>
          <Grid.Row>
            
            <Grid.Column>
             <div><h2>Jira</h2></div>
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