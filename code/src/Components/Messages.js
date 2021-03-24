import React from 'react'
import MessageElement from './MessageElement'

const Messages = ({ messageList, handleLikesIncrease }) => {

  return (
    <>
      {messageList.map((message) => (
        <MessageElement
          key={message._id} 
          message={message} 
          onLikesIncrease={handleLikesIncrease}/>
      ))}
    </>
  )
}

export default Messages