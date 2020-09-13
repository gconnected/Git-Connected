// ******IMPORTANT TO DO LIST REMINDERS********
// - NEED TO UPDATE THE END ROUTES FOR ALL AXIOS REQUESTS


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stat } from 'fs';

// establishing the data types within our searchInfo state
interface searchInfo {
	searchCompany: string,
	searchJob: string,
}

// establishing the data type within our resultArray state
// resultArray will only have one property named usersArray that has an array as a value
// the array value will have elements that are objects that follow the data types shown in "interface resultInfo" approx line 25
interface resultArray {
	usersArray: Array<resultInfo>,
}

// establishing the data types within our resultInfo state
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

// establishing the data types within out dropDownOptions state
// each property value is going to be an array and the data types of the elements strings (defined in the < >)
interface dropDownOptions {
	optionsCompany: Array<string>,
	optionsJob: Array<string>,
}

// declaring a functional component labeled Search (TS: React.FC)
const Search: React.FC = () => {
	// React Hooks: searchInfo => state, setSearchInfo => setState
	// useState initializes our starting values in our searchInfo state
	// <searchInfo> is like a schema that the searchInfo values need to adhere to which was already declared back in line 6 in "interface searchInfo"
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
	// if the array is empty, useEffect will behave exactly like componentDidMount and execute only on the first rendering
	// if you pass elements into this array, useEffect will execute every time those value changes

	
	// this function will reference our dropDownOptions state and grab our optionsCompany array, iterate over it and create an option tag per element
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

	// Event Handler that will update our state depending on what the user selects on the dropdown menu selection for Company
	// TS: event: React.ChangeEvent<HTMLSelectElement>
		// TS Translation: what kind of event is it? <what kind of element type>
	const companyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setSearchInfo((prevState) => ({
			...prevState,
			searchCompany: value,
		}))
		console.log('Company Search Option Changed');
	}

	// Same Event Handler but targeting a different Select Tag and updating a different property in searchInfo state
	const jobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setSearchInfo((prevState) => ({
			...prevState,
			searchJob: value,
		}))
		console.log('Job Search Option Changed');
	}


	// Similar Event Handler that targets the Form tag and will make a axios post request passing in our searchInfo state in our req.body
	// When we receive a settled (successful) promise, we want to update our resultInfo state, with all the data we retrieved from the SQL db
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

	const renderTableHeader = () => {
		const headerElement = ['Profile Pic', 'First Name', 'Last Name', 'City', 'State', 'Country', 'Current Company', 'Past Company', 'Job Position', 'Years of Experience', 'Tech Stack'];

		return headerElement.map((element, index) => {
			return (
				<th key={index}>{element.toUpperCase()}</th>
			)
		})
	}

	// this function targets our resultInfo state and returns customized table rows with the content from our state
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
			<div id="searchContainer">
				{/* Form Tag that has an onSubmit attribute that will take all our select tag values once the input select button has been clicked on */}
				<form id="searchBar" onSubmit={searchStart}>
					{/* Company Name from Database */}
					<select name="Company Search" id="searchCompany" onChange={companyChange} defaultValue="Company">
						<option value="" hidden>Company</option>
						<option value="Apple">Apple</option>
						<option value="Google">Google</option>
						<option value="Instagram">Instagram</option>
						{mapCompanies()}
						<option value="Other">Other</option>
					</select>
					{/* Job Position */}
					<select name="Job Search" id="searchJob"onChange={jobChange} defaultValue="Job Position">
						<option value="" hidden>Job Position</option>
						<option value="Software Engineer">Software Engineer</option>
						<option value="Product Engineer">Product Engineer</option>
						<option value="Product Designer">Product Designer</option>
						<option value="CTO">CTO</option>
						{mapJobs()}
					</select>
					{/* Submit Input tag that will initate the form's onSubmit attribute function: searchStart with the post request */}
					<input type="submit" id="searchButton"/>
					{/* Reset Input tag that will change all the select values back to default */}
					<input type="reset" id="resetButton"/>
					{console.log(searchInfo)}
				</form>
				{/* NEED TO INSERT SOME CONDITIONAL LOGIC, ONCE WE GET A SUCCESSFUL RESPONSE FROM OUR AXIOS POST REQUEST FROM OUR SEARCHSTART FUNCTION AROUND LINE 90 */}
			</div>
			<div id="resultContainer">
				<table id="resultTable">
					<tbody>
						<tr>{renderTableHeader()}</tr>
						{renderTableBody()}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Search;