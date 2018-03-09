import React, { Component } from 'react';
import Message from './Message';

const MessageList = ({messages}) => {
  return (
  <div> 
    {messages.map((message, index) => (
      <Message
        key={index}
        labels={message.labels}
        subject={message.subject}
        starred={message.starred}
      />
    ))}
  </div>
);
}

export default MessageList;
