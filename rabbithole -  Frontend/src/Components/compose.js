import React from 'react'

const compose = ({PlayerOneResponse, bodyChange, nameChange}) => {

  return (
    <div class="dropdown-menu">
    <form className="form col-sm-8">
      <div className="form-group">
        <label htmlFor="subject">
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
        <label for="body">
        </label>
        <div className="form-actions">
          <textarea name="body" id="body" className="form-control"   placeholder="Enter a funny or interesting response" onChange={bodyChange}/>
        </div>
      </div>
        <div className="form-actions">
          <input value="Submit" readOnly className="btn btn-primary-outline text-center" onClick={(e)=>PlayerOneResponse(e)}/>
      </div>
      <br></br>
      <br></br>
    </form>
    </div>
  )
}
export default compose
