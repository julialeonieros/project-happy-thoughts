import React from 'react'

const Form = ({onSubmit, value, onChange}) => {

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
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="form-button">
          <span role="img" aria-labelledby="submit">❤️</span><span className="button-text"> Send happy thought! </span><span role="img" aria-labelledby="submit">❤️</span>
        </button>
      </form>
    </div>
  )
}

export default Form