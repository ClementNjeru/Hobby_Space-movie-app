import React from 'react'

function Comment(props) {
  return (
    <div >
      <table>
        <tr>
          <td className='fun'>Name</td>
          <th className='fun'>Review</th>
        </tr>
        <tr>
        <td className='com'>{props.name}</td>
        <td className='com1'>{props.comment}</td>
        </tr>
        </table>
    </div>
  )
}

export default Comment