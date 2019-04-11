import React from "react";

const Input = (props) => (
	<header className = "card ">
        <div className = "card-header">
            <h3> 
                <i className = "fa fa-far fa-book" aria-hidden = "true"></i> Book Search
            </h3>
        </div>
        <div className = "card-body">
            <form>
                <div className = "form-group">
                    <label htmlFor = "Query">Book</label>
                    <input className="form-control"
                        value={props.search}
                        type="text"
                        name="searchBook"
                        placeholder="Enter Book's Name"
                        onChange={props.handleInputChange}
                    />
                </div>
                <button type="submit" className = "btn btn-lg btn-secondary" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
	</header>
);


export default Input;