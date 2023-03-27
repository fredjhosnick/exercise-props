import React from 'react'

const LastName = (props) => {
  return (
    <>
   <form className='register-form'>
        <label htmlFor=""><span>Last Name:</span>
        <br/>
        <input 
        type="text" 
        placeholder='Write your last name' 
        value={props.lastName}
        onChange={()=>{props.handlerLastName()}}/>
        </label>
   
   </form>
   </>
  )
}

export default LastName