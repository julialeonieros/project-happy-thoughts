import React from 'react'
import moment from 'moment'

const Messages = ({ messageList, handleLikesIncrease }) => {
  return (
    <>
      {messageList.map((message) => (
        <div className="messages-container" key={message._id}>
          <p className="message-text-area">{message.message}</p>
          <button onClick={() => handleLikesIncrease(message._id)} 
          className={message.hearts > 0 ? 'like-button pink' : 'like-button grey'}>
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </button>
          <p className="likes">x {message.hearts}</p>
          <p className="date">- {moment(message.createdAt).fromNow()}</p>
        </div>
      ))}
    </>
  )
}

export default Messages
