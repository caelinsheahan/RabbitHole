import React from 'react'
//import response from './response'
const responseList = ({
  displayResponse1,
  displayResponse2,
  displayResponse3,
  displayResponse4,
  displayResponse5,
  VotePlayer1,
  VotePlayer2,
  VotePlayer3,
  VotePlayer4,
  VotePlayer5
}) => {
  return (
    <div>
      <div onClick={e => VotePlayer1(e)}>
        <h3>{displayResponse1()}</h3>
        <br></br>
      </div>
      <div onClick={e => VotePlayer2(e)}>
      <h3>{displayResponse2()}</h3>
      <br></br>
    </div>
    <div onClick={e => VotePlayer3(e)}>
    <h3>{displayResponse3()}</h3>
    <br></br>
  </div>
  <div onClick={e => VotePlayer4(e)}>
  <h3>{displayResponse4()}</h3>
  <br></br>
</div>
<div onClick={e => VotePlayer5(e)}>
<h3>{displayResponse5()}</h3>
<br></br>
</div>
    </div>
  )
}
export default responseList
