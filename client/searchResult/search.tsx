// ******IMPORTANT TO DO LIST REMINDERS********
// - NEED TO UPDATE THE END ROUTES FOR ALL AXIOS REQUESTS

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stat } from 'fs';

/**
 * TS: interface searchInfo: lets us initialize the data type for our searchInfo state
 */
interface searchInfo {
	searchCompany: string,
	searchJob: string,
}

/**
 * TS: interface resultArray: lets us initialize the data type
 * for our resultArray state
 * 
 * In this case, we are specifying that resultArray will have one property
 * and its value's data type is an array (Array<resultInfo>)
 * 
 * <resultInfo> is another interface that determines the model that 
 * the elements within that array will follow
 * 
 * In this case, in our usersArray value, we will have an array
 * that has elements that are objects and each object will need to
 * adhere to our interface reultInfo
 */
interface resultArray {
	usersArray: Array<resultInfo>,
}

/**
 * TS: interface resultInfo: specifies our that each element will contain
 * the following property names and their values must adhere to the 
 * mentioned data type entered below
 */
interface resultInfo {
	// profilePic? string => Url, HTMLImageElement => <img>, File => <input>
	resultProfilePic?: string,
	resultFirstName: string,
	resultLastName: string,
	resultCity: string,
	resultState: string,
	resultCountry: string,
	resultCompanyName: string,
	resultPastCompanyName: string,
	resultJob: string,
	resultTechStack: string,
	resultYearsExp: number,
}

/**
 * TS: interface dropDownOptions: determines the data type we are
 * expecting in each respective property name from our http requests
 * from the SQL db
 * 
 * In this case, each property value is an array with elements that
 * only have string data types which are defined between < >
 */
interface dropDownOptions {
	optionsCompany: Array<string>,
	optionsJob: Array<string>,
}

/**
 * TS: React.FC => it is a label to confirm that our Search Function is a React Functional Component
 */
const Search: React.FC = () => {
	/**
	 * React Hooks: searchInfo => state, setSearchInfo => setState
	 * useState initializes our starting values in our searchInfo state
	 * 
	 * <searchInfo> is like a schema that the searchInfo values 
	 * need to adhere to which was already declared back in line 6 
	 * in "interface searchInfo"
	 */
	const [ searchInfo, setSearchInfo ] = useState<searchInfo>({
		searchCompany: "",
		searchJob: "",
	});

	const [ resultArray, setResultArray ] = useState<resultArray>({
		usersArray: [],
	})

	// Same thing here, but we have another state labeled resultInfo
	const [ resultInfo, setResultInfo ] = useState<resultInfo>({
		resultProfilePic: "",
		resultFirstName: "",
		resultLastName: "",
		resultCity: "",
		resultState: "",
		resultCountry: "",
		resultCompanyName: "",
		resultPastCompanyName: "",
		resultJob: "",
		resultTechStack: "",
		resultYearsExp: 0,
	})

	const [ dropDownOptions, setDropDownOptions ] = useState<dropDownOptions>({
		optionsCompany: [],
		optionsJob: [],
	})
	
	// Runs just like componentDidMount but a lot more flexible
	useEffect(() => {
		// get request to get all the company names from the company table in SQL db
		axios.get('/companies')
			.then((result) => {
				// updating our dropDownOptions state with our returned array from our request
				setDropDownOptions((prevState) => ({
					...prevState,
					optionsCompany: result.data,
				}))
			})
			.catch((err) => {
				console.log('Error in App Axios Get Request for /companys', err);
			});
		
		// get request to get all the job names from the user table in SQL db
		axios.get('/jobs')
			.then((result) => {
				// updating our dropDownOptions state with our returned array from our request
				setDropDownOptions((prevState) => ({
					...prevState,
					optionsJob: result.data,
				}))
			})
			.catch((err) => {
				console.log('Error in App Axios Get Request for /jobs', err);
			});

	}, []);
	/**
	 * ^^^if the array is empty, useEffect will behave exactly like 
	 * componentDidMount and execute only on the first rendering
	 * 
	 * if you pass elements into this array, useEffect will execute 
	 * every time those value changes
	 */


	/**
	 * mapCompanies will reference our dropDownOptions state and 
	 * grab our optionsCompany array, iterate over it and create an option 
	 * tag per element
	 */
	const mapCompanies = () => {
		return dropDownOptions.optionsCompany.map((company) => {
			return (
				<option value={company}>{company}</option>
			)
		})
	}
	
	// same concept as the function above
	const mapJobs = () => {
		return dropDownOptions.optionsJob.map((job) => {
			return (
				<option value={job}>{job}</option>
			)
		})
	}

	/**
	 * Event Handler that will update our state depending on what the user
	 * selects on the dropdown menu selection for Company
	 * 
	 * @param event: TS needs to specify what kind of event we are 
	 * listening to and what kind of element is being targeted
	 * Eg. event: React.ChangeEvent<HTMLSelectElement>
	 * TS Translation: what kind of event is it? <element type>
	 */
	const companyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setSearchInfo((prevState) => ({
			...prevState,
			searchCompany: value,
		}))
		console.log('Company Search Option Changed');
	}

	/**
	 * Same Event Handler but targeting a different Selet Tag and updating a different property in searchInfo state
	 * 
	 * @param event: TS needs to specify what kind of event we are 
	 * listening to and what kind of element is being targeted
	 * Eg. event: React.ChangeEvent<HTMLSelectElement>
	 * TS Translation: what kind of event is it? <element type>
	 */
	const jobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setSearchInfo((prevState) => ({
			...prevState,
			searchJob: value,
		}))
		console.log('Job Search Option Changed');
	}

	/**
	 * Similar Event Handler that targets the Form tag and will make an
	 * axios post request passing in our searchInfo state in our req.body
	 * 
	 * When we receive a settled (successful) promise, we want to update
	 * our resultInfo state, with all the data we retrieved from the SQL db
	 * 
	 * @param event: TS needs to specify what kind of event we are 
	 * listening to and what kind of element is being targeted
	 * Eg. event: React.FormEvent<HTMLElement>
	 * TS Translation: what kind of event is it? <element type>
	 */
	const searchStart = (event: React.FormEvent<HTMLElement>) => {
		event.preventDefault();
		console.log('Search Button Clicked')
		// NEED TO EDIT THE result.data.(propertynames) => PLACEHOLDERS
		// BASED PLACEHOLDERS OFF OF SQL COLUMN NAMES
		axios.post('/search', searchInfo)
			.then((result) => {
				setResultInfo((prevState) => ({
					...prevState,
					resultProfilePic: result.data["profile_pic"],
					resultFirstName: result.data.firstname,
					resultLastName: result.data.lastname,
					resultCity: result.data.city,
					resultState: result.data.state,
					resultCountry: result.data.country,
					resultCompanyName: result.data["company_name"],
					resultPastCompanyName: result.data["past_companies"],
					resultJob: result.data.job,
					resultTechStack: result.data.techStack,
					resultYearsExp: result.data["year_exp"],
				}))
			})
	}

	/**
	 * Quick Table Header render function using the map method, so that 
	 * our code remains DRY
	 */
	const renderTableHeader = () => {
		const headerElement = ['Profile Pic', 'First Name', 'Last Name', 'City', 'State', 'Country', 'Current Company', 'Past Company', 'Job Position', 'Years of Experience', 'Tech Stack'];

		return headerElement.map((element, index) => {
			return (
				<th key={index}>{element.toUpperCase()}</th>
			)
		})
	}

	/**
	 * Table Body Row(s) render function using the map method, so
	 * that our code remains DRY
	 * 
	 * This function targets our usersArray property (its value is 
	 * an array of objects) from our resultArray state, map iterates 
	 * over that targeted array and returns customized table rows with 
	 * the content drawn from each element in the iterated array
	 */
	const renderTableBody = () => {
		return resultArray.usersArray.map((userObj) => {
			return (
				<tr>
					<td>{userObj.resultProfilePic}</td>
					<td>{userObj.resultFirstName}</td>
					<td>{userObj.resultLastName}</td>
					<td>{userObj.resultCity}</td>
					<td>{userObj.resultState}</td>
					<td>{userObj.resultCountry}</td>
					<td>{userObj.resultCompanyName}</td>
					<td>{userObj.resultPastCompanyName}</td>
					<td>{userObj.resultJob}</td>
					<td>{userObj.resultYearsExp}</td>
					<td>{userObj.resultTechStack}</td>
				</tr>
			)
		})
	}

	// Search FC will be rendering the following return statement
	return (
		<div>
			{/* Search Container */}
			<div id="searchContainer" className="container mt-3 d-flex justify-content-center">
				{/* Form Tag that has an onSubmit attribute that will take all our select tag values once the submit input tag has been clicked on */}
				<form id="searchBar" onSubmit={searchStart} className="d-flex justify-content-center flex-column">
					{/* Company Name from Database */}
					<select name="Company Search" id="searchCompany" onChange={companyChange} defaultValue="Company" className="custom-select mb-3">
						<option value="" hidden>Company</option>
						<option value="Apple">Apple</option>
						<option value="Google">Google</option>
						<option value="Instagram">Instagram</option>
						{mapCompanies()}
						<option value="Other">Other</option>
					</select>
					{/* Job Position */}
					<select name="Job Search" id="searchJob" onChange={jobChange} defaultValue="Job Position" className="custom-select mb-3">
						<option value="" hidden>Job Position</option>
						<option value="Software Engineer">Software Engineer</option>
						<option value="Product Engineer">Product Engineer</option>
						<option value="Product Designer">Product Designer</option>
						<option value="CTO">CTO</option>
						{mapJobs()}
					</select>
					{/* Submit Input tag that will initate the form's onSubmit attribute function: searchStart with the post request */}
					<input type="submit" id="searchButton" className="btn mb-3 btn-success" value="Search"/>
					{/* Reset Input tag that will change all the select values back to default */}
					<input type="reset" id="resetButton" className="btn mb-3" />
					{console.log(searchInfo)}
				</form>
				{/* NEED TO INSERT SOME CONDITIONAL LOGIC, ONCE WE GET A SUCCESSFUL RESPONSE FROM OUR AXIOS POST REQUEST FROM OUR SEARCHSTART FUNCTION AROUND LINE 90 */}
			</div>
			{/* Results Container */}
			<div id="resultsContainer">
				<table id="resultTable" className="table table-hover m-5">
					<thead>
						{renderTableHeader()}
					</thead>
					<tbody>
						{renderTableBody()}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Search;