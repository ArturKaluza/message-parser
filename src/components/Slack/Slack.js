import React, { Component, Fragment } from 'react';
import { List, Dimmer, Loader, Segment } from 'semantic-ui-react';
import axios from 'axios';
import './Slack.css'

class Slack extends Component {
  constructor() {
    super()

    this.state = {
      messages: [],
      users: [],
      isLoading: false
    }
  }

  getMessages() {
    const config = {
      headers: { 
        'Content-Type':'application/x-www-form-urlencoded',
      },
      params: {
        token: 'xoxp-405795262034-405660880195-405558814996-c2f88f4ec95d42fce48c4b7302f6b9dd',
        channel: 'CBX71C4AD'
      }
    }
    return axios.get('https://slack.com/api/channels.history', config)
    .then(response => {
      this.setState({ messages: response.data.messages.reverse(), isLoading: false  })
    })
  }

  getUsers() {
    this.setState({ isLoading: true })

    const config = {
      headers: { 
        'Content-Type':'application/x-www-form-urlencoded',
      },
      params: {
        token: 'xoxp-405795262034-405660880195-405558814996-c2f88f4ec95d42fce48c4b7302f6b9dd',
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
    this.getMessages()
    .then(this.getUsers())

  }

  renderMessage(data) {
    return (
      <List.Item>
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
        <Segment>
          <Dimmer inverted active={this.state.isLoading}>
            <Loader />
          </Dimmer>
          <List divided relaxed>
            { this.state.messages.map(this.renderMessage) }
          </List>
        </Segment>
      </Fragment>
    )
  }
}


export default Slack;