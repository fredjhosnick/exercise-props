import React from 'react'

const FirstName = (props) => {
  return (
   <>
   <form className='register-form'>
        <label><span>Frist Name:</span>

        <br/> 
        <input 
         type="text"
         placeholder='Write your name' 
         value={props.firstName}
         onChange={()=>{ props.handlerFirstName()}}/>
        </label>
   
   </form>
   </>
  )
}

export default FirstName