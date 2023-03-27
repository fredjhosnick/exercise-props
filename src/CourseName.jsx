import React from 'react'

const CourseName = (props) => {
  return (
    <form className='register-form'>
        <span>Courses Names:</span>
   <select onChange={()=>{props.handlerCourseName()}} value={props.courseName}>
        <option  value="javaScript">JavaScript</option>
        <option  value="java">Java</option>
        <option  value="react js">React JS</option>
        <option  value="python">Python</option>
   </select>
   </form>
  )
}

export default CourseName