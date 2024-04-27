import React from 'react'
import "./Css/Contact.css"
function Contact() {
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <form action="" >
        <div className="name">
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" id="name" />
        </div>

         <div className="email">
          <label htmlFor="email">E-mail :</label>
        <input type="email" name='email'id='email' />
        </div>
        <div className="message">
          <label htmlFor="message">Message :</label>
          <textarea name="message" id="message" ></textarea>
        </div>
         <button type='submit'> Submit</button>
      </form>
    </div>
  )
}

export default Contact
