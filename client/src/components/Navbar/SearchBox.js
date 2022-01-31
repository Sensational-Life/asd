import React from "react"
import "./SearchBox.css";

function SearchBox() {
	return (
		<div className="search-box-container">
			<form className="search-box-form">
				<input className="search-input" type="search" placeholder="Search anything" />
				<button className="search-button" type="submit"></button>
			</form>
		</div>
	);
}
export default SearchBox;
