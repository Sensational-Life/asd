import React from "react"
import "./SearchBox.css";

function SearchBox() {
	return (
		<div className="search-box-container">
			<form>
				<input type="search" placeholder="Search anything" />
				<button type="submit"></button>
			</form>
		</div>
	);
}
export default SearchBox;
