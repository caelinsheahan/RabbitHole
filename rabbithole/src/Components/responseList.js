import React from 'react'
import response from './response'
const responseList = ({response, PlayerOneResponse, PlayerTwoResponse}) => {
  return (
    <div>
    <div className='p1'>
<p>{PlayerOneResponse}</p>
    </div>
    <div className='p2'>
<p>{PlayerTwoResponse}</p>
    </div>
    </div>
  )
}
export default responseList
