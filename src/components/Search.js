import React from "react";

function Search(props){
    return(
      <center>
        <form style={{margin:"20px", padding:"10px"}}>
        <div className="form-group">
          <label style={{fontSize:"2rem", marginRight:"10px", marginTop:"8px" }}htmlFor="search">Search  </label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            placeholder="Search Name"
            style={{width:"70%", padding:"10px"}}
          />
          <button style={{margin:"5px"}} onClick={props.handleFormSubmit} className="btn btn-lg btn-primary">
            Search
          </button>
        </div>
      </form>
      </center>
    )

}

export default Search;