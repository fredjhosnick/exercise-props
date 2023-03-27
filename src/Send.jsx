import React from 'react'

const Send = (props) => {
  return (
    <button onClick={props.handlerClick} onChange={props.handlerSend}>Send</button>
  )
}

export default Send