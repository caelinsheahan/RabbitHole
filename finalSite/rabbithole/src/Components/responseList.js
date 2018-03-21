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
  VotePlayer5,
  displayVote1,
  displayVote2,
  displayVote3,
  displayVote4,
  displayVote5
}) => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-4">
          <div className="card" onClick={e => VotePlayer1(e)}>
            <div className="card-body">
              <h5 className="card-title">{displayVote1()}</h5>
              <p className="card-text">{displayResponse1()}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div className="card" onClick={e => VotePlayer2(e)}>
            <div className="card-body">
              <h5 className="card-title">{displayVote2()}</h5>
              <p className="card-text">{displayResponse2()}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div className="card" onClick={e => VotePlayer3(e)}>
            <div className="card-body">
              <h5 className="card-title">{displayVote3()}</h5>
              <p className="card-text">{displayResponse3()}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div className="card" onClick={e => VotePlayer4(e)}>
            <div className="card-body">
              <h5 className="card-title">{displayVote4()}</h5>
              <p className="card-text">{displayResponse4()}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div className="card" onClick={e => VotePlayer5(e)}>
            <div className="card-body">
              <h5 className="card-title">{displayVote5()}</h5>
              <p className="card-text">{displayResponse5()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default responseList
