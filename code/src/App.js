import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, LIKES_URL } from 'utils/urls'
import { Form } from 'Components/Form'
import { Messages } from 'Components/Messages'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(() => fetchMessageList)
      // .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
      .catch(err => console.error(err))
  }

  const handleLikesIncrease = (id) => {
    fetch(LIKES_URL(id))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKES_URL(id), options)
      .then(res => res.json())
      .then(receivedMessage => {
        const updatedMessageList = messageList.map(message => {
          if (message._id === receivedMessage._id) {
            message.likes += 1
          }
          return message 
        })
        setMessageList(updatedMessageList)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <Form 
        onSubmit={onFormSubmit}
        value={messageNew}
        onChange={handleMessageNewChange}
      />
      {messageList.map((message) => (
        <Messages 
          key={message._id}
          message={message.message}
          likes={(message.hearts)}
          date={moment(message.createdAt).fromNow()}
          onClick={() => handleLikesIncrease(message._id)}
        />
      ))}
    </div>
    )}


    {/* <button onClick={onHeartClick} type="submit" className="like-button">❤️</button> */}
    {/* <button onClick={() => onHeartClick(message._id)} type="submit" className="like-button">❤️</button> */}

    //if passed as props, handleMessageNewChange