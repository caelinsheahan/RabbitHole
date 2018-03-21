import React from 'react'

const compose = ({PlayerOneResponse, bodyChange, nameChange}) => {

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="subject" className="">
        </label>
        <div className="form-actions">
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
        <div className="form-actions">
          <textarea name="body" id="body" className="form-control"   placeholder="Enter a funny or interesting response" onChange={bodyChange}/>
        </div>
      </div>
        <div className="form-actions">
          <input value="Submit" className="btn btn-primary text-center" onClick={(e)=>PlayerOneResponse(e)}/>
        </div>
    </form>
  )
}
export default compose
