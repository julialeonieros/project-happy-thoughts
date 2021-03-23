import React from 'react'

export const Form = props => {
  const { messageNew, onSubmit, onChange } = props

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <label htmlFor="newMessage">Write new message! </label>
        <input 
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onChange}
        />
        <button type="submit">Send message!</button>
      </form>
    </div>
  )
}


      {/* <Form 
        onSubmit={onFormSubmit}
        onChange={onMessageNewChange}
      /> */}
