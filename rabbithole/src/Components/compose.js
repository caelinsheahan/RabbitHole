import React from 'react'

const compose = ({PlayerOneResponse, PlayerTwoResponse, bodyChange, nameChange}) => {

  return (
    <form className="form">
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <h4>Compose Message</h4>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="col-sm-2 control-label">
          Name
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Enter a Message Name"
            name="name"
            onChange={nameChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label for="body" className="col-sm-2 control-label">
          Message
        </label>
        <div className="col-sm-8">
          <textarea name="body" id="body" className="form-control" onChange={bodyChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-8 col-sm-offset-2">
          <input className="btn btn-primary" onClick={(e)=>PlayerOneResponse(e)}/>
        </div>
      </div>
    </form>
  )
}
export default compose
