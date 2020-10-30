// ******IMPORTANT TO DO LIST REMINDERS********
// - NEED TO UPDATE THE END ROUTES FOR ALL AXIOS REQUESTS

import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * TS: interface searchInfo: lets us initialize the data type for our searchInfo state
 */
interface searchInfo {
  searchCompany: string;
  searchJob: string;
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
 * adhere to our interface resultInfo
 */
interface resultArray {
  usersArray: Array<resultInfo>;
}

/**
 * TS: interface resultInfo: specifies our that each element will contain
 * the following property names and their values must adhere to the
 * mentioned data type entered below
 */
interface resultInfo {
  // profilePic? string => Url, HTMLImageElement => <img>, File => <input>
  resultProfilePic?: string;
  resultFirstName: string;
  resultLastName: string;
  resultCity: string;
  resultState: string;
  resultCountry: string;
  resultCompanyName: string;
  resultPastCompanyName: string;
  resultJob: string;
  resultTechStack: string;
  resultYearsExp: number;
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
  optionsCompany: Array<any>;
  optionsJob: Array<any>;
}

interface componentRenderingInfo {
	status: string;
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
  const [searchInfo, setSearchInfo] = useState<searchInfo>({
    searchCompany: "",
    searchJob: 10,
  });

  const [resultArray, setResultArray] = useState<resultArray>({
    usersArray: [],
  });

  // Same thing here, but we have another state labeled resultInfo
  const [resultInfo, setResultInfo] = useState<resultInfo>({
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
  });

  const [results, setResults] = useState<Array<any>>([]);

  const [dropDownOptions, setDropDownOptions] = useState<dropDownOptions>({
    optionsCompany: [],
    optionsJob: [],
	});

	const [componentRendering, setComponentRendering] = useState<componentRenderingInfo> ({
		status: "OFF",
	});

  // Runs just like componentDidMount but a lot more flexible
  useEffect(() => {
    // get request to get all the company names from the company table in SQL db
    axios
      .get("/api/getCompanies")
      .then((result) => {
        console.log(result);
        // updating our dropDownOptions state with our returned array from our request
        setDropDownOptions((prevState) => ({
          ...prevState,
          optionsCompany: result.data,
        }));
      })
      .catch((err) => {
        console.log("Error in App Axios Get Request for /getCompany", err);
      });

    // get request to get all the job names from the user table in SQL db
    axios
      .get("/api/getJobs")
      .then((result) => {
        // updating our dropDownOptions state with our returned array from our request
        setDropDownOptions((prevState) => ({
          ...prevState,
          optionsJob: result.data,
        }));
      })
      .catch((err) => {
        console.log("Error in App Axios Get Request for /getJobs", err);
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
        <option value={company["company_name"]}>
          {company["company_name"]}
        </option>
      );
    });
  };

  // same concept as the function above
  const mapJobs = () => {
    return dropDownOptions.optionsJob.map((job) => {
      return <option value={job["job"]}>{job["job"]}</option>;
    });
  };

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
    }));
    console.log("Company Search Option Changed");
  };

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
    }));
    console.log("Job Search Option Changed");
  };

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
    console.log("Search Button Clicked");
    // NEED TO EDIT THE result.data.(propertynames) => PLACEHOLDERS
    // BASED PLACEHOLDERS OFF OF SQL COLUMN NAMES
    axios.post("/api/search", searchInfo).then((data) => {
      console.log("data: ", data.data);
      setResults([...data.data]);
      return console.log("results state: ", results);
		});
		setComponentRendering({
			status: "ON",
		})
	};
	
  /**
   * Quick Table Header render function using the map method, so that
   * our code remains DRY
   */
  const renderTableHeader = () => {
    const headerElement = [
      "First Name",
      "Last Name",
      "City",
      "State",
      "Country",
      "Current Company",
      "Job Position",
      "Years of Experience",
    ];

    return headerElement.map((element, index) => {
      return <th key={index}>{element.toUpperCase()}</th>;
    });
  };

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
    return results.map((userObj) => {
      return (
        <tr>
          <td>{userObj.firstname}</td>
          <td>{userObj.lastname}</td>
          <td>{userObj.city}</td>
          <td>{userObj.state}</td>
          <td>{userObj.country}</td>
          <td>{userObj["company_name"]}</td>
          <td>{userObj.job}</td>
          <td>{userObj["years_exp"]}</td>
        </tr>
      );
    });
  };

  // Search FC will be rendering the following return statement
  return (
    <div
      id="outerSearchContainer"
    >
      {/* Search Container */}
      <div
        id="innerSearchContainer"
      >
        {/* Form Tag that has an onSubmit attribute that will take all our select tag values once the submit input tag has been clicked on */}
        <form
          id="searchBar"
          onSubmit={searchStart}
        >
          {/* Company Name from Database */}
          <select
            name="Company Search"
            id="searchCompany"
            onChange={companyChange}
            defaultValue="Company"
          >
            <option value="" hidden>
              Company
            </option>
            {mapCompanies()}
            <option value="Other">Other</option>
          </select>
          {/* Job Position */}
          <select
            name="Job Search"
            id="searchJob"
            onChange={jobChange}
            defaultValue="Job Position"
          >
            <option value="" hidden>
              Job Position
            </option>
            {mapJobs()}
          </select>
          {/* Submit Input tag that will initate the form's onSubmit attribute function: searchStart with the post request */}
          <input
            type="submit"
            id="searchButton"
            value="Search"
          />
          {/* Reset Input tag that will change all the select values back to default */}
          <input type="reset" id="resetButton"/>
          {console.log(searchInfo)}
        </form>
        {/* NEED TO INSERT SOME CONDITIONAL LOGIC, ONCE WE GET A SUCCESSFUL RESPONSE FROM OUR AXIOS POST REQUEST FROM OUR SEARCHSTART FUNCTION AROUND LINE 90 */}
      </div>
			{/* Results Container */}
			{(componentRendering.status === "ON") ? 
				<div id="resultsContainer">
					<table id="resultTable">
						<thead>
							{renderTableHeader()}
						</thead>
						<tbody>{renderTableBody()}</tbody>
					</table>
				</div> : null}
    </div>
  );
};

export default Search;
