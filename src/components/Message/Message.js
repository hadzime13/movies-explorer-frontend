import React from 'react';
import './Message.css'

const Message = ({ messageText }) => {

  return (
    <p className="message__text">{messageText}</p>
  )

}

export default Message;