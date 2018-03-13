import React from 'react';
import Message from './Message';

const MessageList = ({messages, toggleSelected, toggleStarred}) => {
  return (
  <div> 
    {messages.map((message, index) => (
      <Message
        key={index}
        labels={message.labels}
        read={message.read}
        starred={message.starred}
        subject={message.subject}
        toggleSelected={ (event) => {toggleSelected(message.id, event)}}
        toggleStarred={ (event) => {toggleStarred(message.id, event)}}
        selected={message.selected}
      />
    ))}
  </div>
);
}

export default MessageList;