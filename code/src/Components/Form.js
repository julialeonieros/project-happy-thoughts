import React from 'react'

export const Form = props => {
  const { messageNew, onSubmit, onChange } = props

  return (
    <div className="form-container">
    <h1>What's making you happy right now?</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="newMessage"></label>
        <input 
          className="form-text-area"
          id="newMessage"
          type="text"
          // maxLength="140"
          value={messageNew}
          onChange={onChange}
        />
        <button type="submit" className="form-button">❤️ <span className="button-text">Send happy thought!</span> ❤️</button>
      </form>
    </div>
  )
}



