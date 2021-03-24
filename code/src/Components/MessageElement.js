import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease }) => {
  return (
    <div className="messages-container">
          <p className="message-text-area">{message.message}</p>
          <button onClick={() => onLikesIncrease(message._id)} 
          className="like-button" style={{ background: message.hearts > 0 ? "#F2ACAD" : "#F2F0F0" }}>
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </button>
          <p className="likes">x {message.hearts}</p>
          <p className="date">- {moment(message.createdAt).fromNow()}</p>
        </div>
  )
}

export default MessageElement