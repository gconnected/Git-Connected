import React, { useState } from "react";

const Search: React.FC = () => {
	return (
		<div>
			<p>Search Component!</p>
			<form id="searchBar">
				{/* Company Name from Database */}
				<select name="" id="">
					<option value="" disabled selected>Company</option>
					<option value="">Apple</option>
					<option value="">Google</option>
					<option value="">Instagram</option>
					<option value="">Other</option>
				</select>
				{/* New Company Name inputted by User*/}
				<input
				type="text"
				className="searchBarInputs"
				placeholder="If selected Other, Enter Company"
				/>
				{/* Job Position */}
				<input
				type="text"
				className="searchBarInputs"
				placeholder="Job Position"
				/>
				<input type="submit" id="searchButton"/>
			</form>
		</div>
	);
};

export default Search;