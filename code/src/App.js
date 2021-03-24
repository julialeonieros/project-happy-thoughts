import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL } from 'utils/urls'
import { Form } from 'Components/Form'
import { Messages } from 'Components/Messages'

// const apiHearts = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`
// const id = 

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  // const [likes, setLikes] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const onMessageNewChange = (event) => {
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
      .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
      .catch(err => console.error(err))
  }

  // const onHeartClick = (event, id) => {
  //   event.preventDefault()

  //   fetch(apiHearts, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(heart => setLikes([...likes, heart]))
  //   .catch(err => console.error(err))
  // }



  // const onHeartClick = (event, id) => {
  //   event.preventDefault()
  //   fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }})
  //   .then(res => res.json())
  //   .then(clickedLike => setLikes([...likes, clickedLike]))
  //   }

  return (
    <div>
      <Form 
        onSubmit={onFormSubmit}
        onChange={onMessageNewChange}
      />

      {messageList.map((message) => (
        <Messages 
          key={message._id}
          message={message.message}
          likes={(message.hearts)}
          date={moment(message.createdAt).fromNow()}
        />
      ))}
    </div>
    )}

      {/* {messageList.map(message => (
        <div className="messages-container" key={message._id}>
          <p className="message-text-area">{message.message}</p>
          <button>❤️</button>
          {/* <button onClick={onHeartClick} type="submit" className="like-button">❤️</button> */}
          {/* <p className="likes">x {(message.hearts)}</p>
          <p className="date">- {moment(message.createdAt).fromNow()}</p>
        </div>
      ))} */}