"use strict";
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
/**Creating functional component in react.
 * This component uses profile as our state through react hooks
 */
const UserProfile = () => {
    // React Hooks assigning signUpInfo as type to state
    const [profile, setProfile] = react_1.useState({
        firstname: "",
        lastname: "",
        birthdate: "",
        city: "",
        state: "",
        country: "",
        company_name: "",
        job: "",
        years_exp: 0,
        profile_pic: "",
    });
    /**
     * Function to handle event changes in text boxes.
     * @param e: needs to be declared with React.ChangeEvent type pointed at HTMLInputElement.
     */
    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfile((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    /**
     * Function to handle mouse events for submitting the form.
     * @param event: TypeScript will not allow onClick events to be tied to the e parameter.
     * Specified with event and declared with React.MouseEvent type pointed at HTMLElement.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        // INSERT AXIOS REQUEST
        axios_1.default
            .post("/api/createUser", profile)
            .then(() => console.log("success!"))
            .catch((err) => console.error(err));
        // Setting form back to empty values
        setProfile({
            firstname: "",
            lastname: "",
            birthdate: "",
            city: "",
            state: "",
            country: "",
            company_name: "",
            job: "",
            years_exp: 0,
            profile_pic: "",
        });
    };
    return (react_1.default.createElement("div", { className: "container col-20 justify-item-center mt-5" },
        react_1.default.createElement("div", { className: "row col-12 d-flex justify-content-center text-grey" },
            react_1.default.createElement("span", { className: "h3" }, "Create Profile")),
        react_1.default.createElement("form", null,
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "firstname", className: "form-control", id: "firstname", placeholder: "First Name", value: profile.firstname, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "lastname", className: "form-control", id: "lastname", placeholder: "Last Name", value: profile.lastname, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "birthdate", className: "form-control", id: "birthdate", placeholder: "Month Day, Year", value: profile.birthdate, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "city", className: "form-control", id: "city", placeholder: "City", value: profile.city, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "state", className: "form-control", id: "state", placeholder: "State", value: profile.state, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "country", className: "form-control", id: "country", placeholder: "Country", value: profile.country, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "company_name", className: "form-control", id: "company_name", placeholder: "Company", value: profile.company_name, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "job", className: "form-control", id: "job", placeholder: "Job", value: profile.job, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "years_exp", className: "form-control", id: "years_exp", placeholder: "Years Experience", value: profile.years_exp, onChange: handleChange })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("input", { type: "profile_pic", className: "form-control", id: "profile_pic", placeholder: "Profile Picture", value: profile.profile_pic, onChange: handleChange })),
            react_1.default.createElement("button", { type: "submit", className: "btn mb-5 btn-success", onClick: handleSubmit }, "Git Connected!")),
        console.log(profile)));
};
exports.default = UserProfile;
