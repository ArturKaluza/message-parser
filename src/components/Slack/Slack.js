import React, { Component, Fragment } from 'react';
import { List, Segment, Button } from 'semantic-ui-react';
import axios from 'axios';
import './Slack.css'
import Loader from '../Loader/Loader'
import SlackMessage from '../SlackMessage/SlackMessage'

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
  randomNum() {
    return Math.floor(Math.random() * 3) + 1;
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
      console.log(response)
      const messages = response.data.messages.map(message => {
        message.id = this.randomNum();
        return message;
      })
      this.setState({ messages: messages.reverse(), isLoading: false  })
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
    if(token) {
      return this.getMessages(token)
      .then(this.getUsers(token))
    }
  }

  render() {
    return (
      <Fragment>
        <div className='column__header'>
          <h2>Slack</h2>
          <a href="https://slack.com/oauth/authorize?client_id=405795262034.405661432179&scope=chat:write:user,channels:history,users:read,users.profile:read">
          <Button primary>Add workspace</Button>
        </a>
        </div>
        <Segment>
          <Loader isLoading={this.state.isLoading} />
          <List divided relaxed>
            { this.state.messages.map(message => {
              return (
              <SlackMessage
                data={message}
                activeTask={this.props.handleActiveTask}
              />
              )
            })}
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