import React, { useState, useEffect } from 'react'

import { API_URL, LIKES_URL } from 'utils/urls'
import Form from 'Components/Form'
import Messages from 'Components/Messages'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [messageNew])

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
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
      .catch(err => console.error(err))
  }

  const handleLikesIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKES_URL(id), options)
      .then(res => res.json())
      .then(() => fetchMessageList())
      .catch(err => console.error(err))
  }

  return (
    <div className="main-container">
      <Form 
        onSubmit={handleFormSubmit}
        value={messageNew}
        onChange={handleMessageNewChange}
      />
      <Messages 
        messageList={messageList}
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
    )}
    