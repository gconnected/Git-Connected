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
const userProfile_1 = __importDefault(require("../userProfile/userProfile"));
/**Creating functional component in react.
 * This component uses signUp as our state through react hooks
 */
const RegistrationForm = (props) => {
    // React Hooks assigning signUpInfo as type to state
    // signUp -> state and setSignUp -> setState()
    const [signUp, setSignUp] = react_1.useState({
        email: "",
        password: "",
    });
    const [componentRendering, setComponentRendering] = react_1.useState({
        status: "OFF",
    });
    /**
     * Function to handle event changes in text boxes.
     * @param e: needs to be declared with React.ChangeEvent type pointed at HTMLInputElement.
     */
    const handleChange = (e) => {
        // const id = e.target.id --> input id
        // const value - e.target.value --> input value
        const { id, value } = e.target;
        setSignUp((prevState) => ({
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
        setComponentRendering({
            status: "ON"
        });
    };
    return (react_1.default.createElement("div", { className: "signup" }, (componentRendering.status === "ON") ? react_1.default.createElement(userProfile_1.default, null) :
        react_1.default.createElement("div", null,
            react_1.default.createElement("form", { className: "loginSignUpFields" },
                react_1.default.createElement("input", { type: "email", id: "email", placeholder: "Enter email", value: signUp.email, onChange: handleChange }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { type: "password", id: "password", placeholder: "Enter Password", value: signUp.password, onChange: handleChange })),
                react_1.default.createElement("button", { type: "submit", onClick: handleSubmit, className: "loginSignUpButtons" }, "Register"),
                console.log(signUp)))));
};
exports.default = RegistrationForm;
