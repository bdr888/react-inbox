import React, { Component } from 'react';
import Message from './Message';

const MessageList = ({messages}) => {
  return (
  <div> 
    {messages.map((message, index) => (
      <Message
        key={index}
        labels={message.labels}
        read={message.read}
        starred={message.starred}
        subject={message.subject}
      />
    ))}
  </div>
);
}

export default MessageList;
