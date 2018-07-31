import React, { Component, Fragment } from 'react';
import { List, Dimmer, Loader, Segment, Button } from 'semantic-ui-react';
import axios from 'axios';
import './Slack.css'

import TestComponent from '../TestComponent/TestComponent';

class Slack extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
      users: [],
      isLoading: false
    }
  }

  getMessages(token) {
    const config = {
      headers: { 
        'Content-Type':'application/x-www-form-urlencoded',
      },
      params: {
        token,
        channel: 'CBX71C4AD'
      }
    }
    return axios.get('https://slack.com/api/channels.history', config)
    .then(response => {
      this.setState({ messages: response.data.messages.reverse(), isLoading: false  })
    })
  }

  getUsers(token) {
    this.setState({ isLoading: true })
    const config = {
      headers: { 
        'Content-Type':'application/x-www-form-urlencoded',
      },
      params: {
        token
      }
    }
    return axios.get('https://slack.com/api/users.list', config)
    .then(response => {
      const newMessages = [...this.state.messages];
      response.data.members.forEach(user => {
        newMessages.forEach(message => {
          if (user.id === message.user) {
            message.name = user.profile.display_name !== "" ? user.profile.display_name : user.profile.real_name;
          }
        })
      })
      this.setState({ message: newMessages })
    })
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token)
    if(token) {
      return this.getMessages(token)
      .then(this.getUsers(token))
    }
  }

  renderMessage(data) {
    return (
      <List.Item key={data.ts}>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>{ data.name || ''}</List.Header>
          <List.Description as='a'>{ data.text }</List.Description>
        </List.Content>
      </List.Item>
    )
  }

  render() {
    return (
      <Fragment>
        <div className='column__header'>
          <p>Slack</p>
        </div>
        <a href="https://slack.com/oauth/authorize?client_id=405795262034.405661432179&scope=chat:write:user,channels:history,users:read,users.profile:read">
          <Button primary>Add workspace</Button>
        </a>
        <Segment>
          <Dimmer inverted active={this.state.isLoading}>
            <Loader />
          </Dimmer>
          <List divided relaxed>
            { this.state.messages.map(this.renderMessage) }
            <List.Item>
              <TestComponent/>
            </List.Item>
          </List>
        </Segment>
      </Fragment>
    )
  }
}


export default Slack;