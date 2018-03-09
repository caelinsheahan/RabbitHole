import React from 'react'
//import response from './response'
const responseList = ({displayResponseOne, displayResponseTwo}) => {
  return (
    <div>
    <div className='p1'>
{displayResponseOne()}
    </div>
    <div className='p2'>
{displayResponseTwo()}
    </div>
    </div>
  )
}
export default responseList
