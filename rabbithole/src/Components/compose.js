import React from 'react'

const compose = ({PlayerOneResponse, PlayerTwoResponse, bodyChange, nameChange}) => {

  return (
    <form className="form">
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Choose Your Response!</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">
          Context
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="What is the context?"
            name="name"
            onChange={nameChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label for="body" className="col-sm-2 control-label">
          Factoid
        </label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control" onChange={bodyChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input value="PlayerOne" className="btn btn-primary" onClick={(e)=>PlayerOneResponse(e)}/>
          <input value="PlayerTwo" className="btn btn-primary" onClick={(e)=>PlayerTwoResponse(e)}/>
        </div>
      </div>
    </form>
  )
}
export default compose
