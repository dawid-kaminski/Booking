import React from 'react';
import './MessagePin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

function MessagePin() {
  return(
    <div className="message-pin">
      <FontAwesomeIcon icon={faCommentAlt} color="#fff" size="2x"/>
    </div>
  )
}

export default MessagePin;