import React from 'react'

const Form = ({onSubmit, value, onChange}) => {

  return (
    <>
      <div className="form-container">
        <h1>What's making you happy right now?</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="newMessage"></label>
            <textarea
              className="form-text-area"
              id="newMessage"
              type="text"
              value={value}
              maxLength={140}
              onChange={onChange}>
            </textarea>
            <button type="submit" className="form-button">
              <span role="img" aria-labelledby="Heart">❤️ </span>
              <span className="button-text"> 
                Send happy thought! 
              </span>
              <span role="img" aria-labelledby="Heart"> ❤️</span>
            </button>
          </form>
        </div>
        <div className="character-counter">
          <p style={{ color: value.length > 134 ? "#FF0000" : "#000" }}>Characters left: {(140-value.length)} 📝</p>
        </div>
    </>
  )
}

export default Form
