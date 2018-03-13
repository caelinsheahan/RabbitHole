import React from 'react'
//import response from './response'
const responseList = ({
  displayResponseOne,
  displayResponseTwo,
  VotePlayerOne,
  VotePlayerTwo
}) => {
  return (
    <div>
      <div className="p1">
        {displayResponseOne()}
        <button onClick={e => VotePlayerOne(e)}>Vote P1</button>
      </div>
      <div className="p2">
        {displayResponseTwo()}
        <button onClick={e => VotePlayerTwo(e)}>Vote P2</button>
      </div>
    </div>
  )
}
export default responseList
