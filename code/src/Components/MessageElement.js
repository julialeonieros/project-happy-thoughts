import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease }) => {
  return (
    <div className="messages-container">
          <p className="message-text-area">{message.message}</p>
          <button onClick={() => onLikesIncrease(message._id)} className="like-button">
            <span role="img" aria-label="Like post">❤️</span>
          </button>
          <p className="likes">x {message.hearts}</p>
          <p className="date">- {moment(message.createdAt).fromNow()}</p>
        </div>
  )
}

export default MessageElement