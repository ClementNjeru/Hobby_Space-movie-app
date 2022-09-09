import React from 'react'

function Comment(props) {
  return (
    <div>
        <li>{props.name}</li>
        <li>{props.comment}</li>
    </div>
  )
}

export default Comment