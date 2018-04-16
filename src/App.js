import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList';
import Toolbar from './Toolbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.addLabel = this.addLabel.bind(this);
    // this.removeLabel = this.removeLabel.bind(this);
    this.handleRead = this.handleRead.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleStarred = this.handleStarred.bind(this);
    this.state = {
      messages: [
        {
          id: 1,
          subject:
            "You can't input the protocol without calculating the mobile RSS protocol!",
          read: false,
          selected: true,
          starred: true,
          labels: [],
        },
        {
          id: 2,
          subject:
            "connecting the system won't do anything, we need to input the mobile AI panel!",
          read: false,
          starred: false,
          labels: [],
        },
        {
          id: 3,
          subject:
            'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
          read: false,
          starred: true,
          labels: ['dev'],
        },
        {
          id: 4,
          subject: 'We need to program the primary TCP hard drive!',
          read: true,
          starred: false,
          labels: [],
        },
        {
          id: 5,
          subject:
            'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
          read: false,
          starred: false,
          labels: ['personal'],
        },
        {
          id: 6,
          subject: 'We need to back up the wireless GB driver!',
          read: true,
          starred: true,
          labels: [],
        },
        {
          id: 7,
          subject: 'We need to index the mobile PCI bus!',
          read: true,
          starred: false,
          labels: ['dev', 'personal'],
        },
        {
          id: 8,
          subject:
            'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
          read: true,
          starred: true,
          labels: [],
        },
      ],
    };
  }

  handleSelected(id, e) {
    this.setState(prevState => ({
      messages: prevState.messages.map(
        message =>
          message.id === id
            ? { ...message, selected: !message.selected }
            : message,
      ),
    }));
  }

  handleStarred(id, e) {
    this.setState(prevState => ({
      messages: prevState.messages.map(
        message =>
          message.id === id
            ? { ...message, starred: !message.starred }
            : message,
      ),
    }));
  }

  handleRead(bool) {
    this.setState(prevState => ({
      messages: prevState.messages.map(
        message => (message.selected ? { ...message, read: bool } : message),
      ),
    }));
  }

  addLabel = event => {
    const newLabel = event.target.value;
    console.log(newLabel);
    this.setState(prevState => ({
      messages: prevState.messages.map(
        message =>
          message.selected ? { ...message, labels: newLabel } : message,
      ),
    }));
  };

  // removeLabel = (event) => {
  //   const newLabel = event.target.value;
  //   this.setState(prevState => ({
  //     messages: prevState.messages.map(
  //       message =>
  //         message.selected
  //         ? { ...message, labels: [newLabel] }
  //         : message
  //     )
  //   }))
  // }

  render() {
    return (
      <div>
        <Toolbar
          addLabel={this.addLabel}
          removeLabel={this.removeLabel}
          toggleRead={this.handleRead}
        />
        <MessageList
          messages={this.state.messages}
          toggleSelected={this.handleSelected}
          toggleStarred={this.handleStarred}
        />
      </div>
    );
  }
}

export default App;
