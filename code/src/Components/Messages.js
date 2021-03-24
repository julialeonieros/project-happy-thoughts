import React from 'react'

export const Messages = props => {
  const { message, likes, date } = props

  return (
    <div className="messages-container" >
      <p className="message-text-area">{message}</p>
      <button type="submit" className="like-button">❤️</button>
      {/* <button onClick={onHeartClick} type="submit" className="like-button">❤️</button> */}
      <p className="likes">x {likes}</p>
      <p className="date">- {date}</p>
    </div>
    
    // <div className="messages-container" key={message._id}>
    //   <p className="message-text-area">{message.message}</p>
    //   <button>❤️</button>
    //   {/* <button onClick={onHeartClick} type="submit" className="like-button">❤️</button> */}
    //   <p className="likes">x {(message.hearts)}</p>
    //   <p className="date">- {moment(message.createdAt).fromNow()}</p>
    // </div>
  )
}