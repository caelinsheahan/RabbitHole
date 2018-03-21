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
      <div>
        <h3>{displayResponseOne()}</h3>
        <br></br>
        <button onClick={e => VotePlayerOne(e)}>Vote P1</button>
      </div>
      <div>
      <h3>{displayResponseTwo()}</h3>
        <br></br>
        <button onClick={e => VotePlayerTwo(e)}>Vote P2</button>
      </div>
    </div>
  )
}
export default responseList
