"use strict";
// ******IMPORTANT TO DO LIST REMINDERS********
// - NEED TO UPDATE THE END ROUTES FOR ALL AXIOS REQUESTS
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
/**
 * TS: React.FC => it is a label to confirm that our Search Function is a React Functional Component
 */
const Search = () => {
    /**
     * React Hooks: searchInfo => state, setSearchInfo => setState
     * useState initializes our starting values in our searchInfo state
     *
     * <searchInfo> is like a schema that the searchInfo values
     * need to adhere to which was already declared back in line 6
     * in "interface searchInfo"
     */
    const [searchInfo, setSearchInfo] = react_1.useState({
        searchCompany: "",
        searchJob: "",
    });
    const [resultArray, setResultArray] = react_1.useState({
        usersArray: [],
    });
    // Same thing here, but we have another state labeled resultInfo
    const [resultInfo, setResultInfo] = react_1.useState({
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
    const [results, setResults] = react_1.useState([]);
    const [dropDownOptions, setDropDownOptions] = react_1.useState({
        optionsCompany: [],
        optionsJob: [],
    });
    const [componentRendering, setComponentRendering] = react_1.useState({
        status: "OFF",
    });
    // Runs just like componentDidMount but a lot more flexible
    react_1.useEffect(() => {
        // get request to get all the company names from the company table in SQL db
        axios_1.default
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
        axios_1.default
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
            return (react_1.default.createElement("option", { value: company["company_name"] }, company["company_name"]));
        });
    };
    // same concept as the function above
    const mapJobs = () => {
        return dropDownOptions.optionsJob.map((job) => {
            return react_1.default.createElement("option", { value: job["job"] }, job["job"]);
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
    const companyChange = (event) => {
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
    const jobChange = (event) => {
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
    const searchStart = (event) => {
        event.preventDefault();
        console.log("Search Button Clicked");
        // NEED TO EDIT THE result.data.(propertynames) => PLACEHOLDERS
        // BASED PLACEHOLDERS OFF OF SQL COLUMN NAMES
        axios_1.default.post("/api/search", searchInfo).then((data) => {
            console.log("data: ", data.data);
            setResults([...data.data]);
            return console.log("results state: ", results);
        });
        setComponentRendering({
            status: "ON",
        });
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
            return react_1.default.createElement("th", { key: index }, element.toUpperCase());
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
            return (react_1.default.createElement("tr", null,
                react_1.default.createElement("td", null, userObj.firstname),
                react_1.default.createElement("td", null, userObj.lastname),
                react_1.default.createElement("td", null, userObj.city),
                react_1.default.createElement("td", null, userObj.state),
                react_1.default.createElement("td", null, userObj.country),
                react_1.default.createElement("td", null, userObj["company_name"]),
                react_1.default.createElement("td", null, userObj.job),
                react_1.default.createElement("td", null, userObj["years_exp"])));
        });
    };
    // Search FC will be rendering the following return statement
    return (react_1.default.createElement("div", { id: "outerSearchContainer" },
        react_1.default.createElement("div", { id: "innerSearchContainer" },
            react_1.default.createElement("form", { id: "searchBar", onSubmit: searchStart },
                react_1.default.createElement("select", { name: "Company Search", id: "searchCompany", onChange: companyChange, defaultValue: "Company" },
                    react_1.default.createElement("option", { value: "", hidden: true }, "Company"),
                    mapCompanies(),
                    react_1.default.createElement("option", { value: "Other" }, "Other")),
                react_1.default.createElement("select", { name: "Job Search", id: "searchJob", onChange: jobChange, defaultValue: "Job Position" },
                    react_1.default.createElement("option", { value: "", hidden: true }, "Job Position"),
                    mapJobs()),
                react_1.default.createElement("input", { type: "submit", id: "searchButton", value: "Search" }),
                react_1.default.createElement("input", { type: "reset", id: "resetButton" }),
                console.log(searchInfo))),
        (componentRendering.status === "ON") ?
            react_1.default.createElement("div", { id: "resultsContainer" },
                react_1.default.createElement("table", { id: "resultTable" },
                    react_1.default.createElement("thead", null, renderTableHeader()),
                    react_1.default.createElement("tbody", null, renderTableBody()))) : null));
};
exports.default = Search;
