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
        <div class="col-sm-8">
          <div className="card bg-primary" onClick={e => VotePlayer1(e)}>
            <div className="card-body">
              <p className="card-text">{displayResponse1()}</p>
                <h5 className="card-title">{displayVote1()}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div className="card bg-success" onClick={e => VotePlayer2(e)}>
            <div className="card-body">
              <p className="card-text">{displayResponse2()}</p>
              <h5 className="card-title">{displayVote2()}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div className="card bg-info" onClick={e => VotePlayer3(e)}>
            <div className="card-body">
              <p className="card-text">{displayResponse3()}</p>
              <h5 className="card-title">{displayVote3()}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div className="card bg-warning" onClick={e => VotePlayer4(e)}>
            <div className="card-body">
              <p className="card-text">{displayResponse4()}</p>
                <h5 className="card-title">{displayVote4()}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div className="card bg-danger" onClick={e => VotePlayer5(e)}>
            <div className="card-body">
              <p className="card-text">{displayResponse5()}</p>
            <h5 className="card-title">{displayVote5()}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default responseList
