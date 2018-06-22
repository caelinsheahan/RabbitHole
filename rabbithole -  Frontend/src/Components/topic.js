import React from 'react'

const topic = ({getTopic, getTime, reset}) => {
  return (
    <div onClick={e => reset(e)}>{getTopic()}<div></div></div>

  )
}
export default topic
