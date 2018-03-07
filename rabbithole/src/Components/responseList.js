import React from 'react'
import response from './response'
const responseList = ({}) => {
  return (
    <div>
      {response.map(response => <response key={response.id} response={response}/>)}
    </div>
  )
}
export default responseList
