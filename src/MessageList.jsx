import React from 'react';
import Message from './Message';

const MessageList = ({messages, toggleSelected}) => {
  return (
  <div> 
    {messages.map((message, index) => (
      <Message
        key={index}
        labels={message.labels}
        read={message.read}
        starred={message.starred}
        subject={message.subject}
        toggleSelected={toggleSelected}
      />
    ))}
  </div>
);
}

export default MessageList;