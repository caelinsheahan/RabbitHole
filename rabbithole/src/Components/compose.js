import React from 'react'

const compose = ({PlayerOneResponse, PlayerTwoResponse, bodyChange, nameChange}) => {

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="subject" className="">
        </label>
        <div className="">
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Enter a New Topic"
            name="name"
            onChange={nameChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label for="body" className="">
        </label>
        <div className="">
          <textarea name="body" id="body" className="form-control"   placeholder="Enter a funny or interesting response" onChange={bodyChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="">
          <input value="PlayerOne" className="btn btn-primary" onClick={(e)=>PlayerOneResponse(e)}/>
          <input value="PlayerTwo" className="btn btn-primary" onClick={(e)=>PlayerTwoResponse(e)}/>
        </div>
      </div>
    </form>
  )
}
export default compose
