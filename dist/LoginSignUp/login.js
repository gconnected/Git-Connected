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
const search_1 = __importDefault(require("../searchResult/search"));
const Login = () => {
    const [loginInfo, setLogin] = react_1.useState({
        email: "",
        password: "",
    });
    const [componentRendering, setComponentRendering] = react_1.useState({
        status: "OFF",
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setLogin((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // INSERT AXIOS REQUEST
        console.log("success");
        setComponentRendering({
            status: "ON",
        });
    };
    return (react_1.default.createElement("div", { className: "login" }, (componentRendering.status === "ON") ? react_1.default.createElement(search_1.default, null) :
        react_1.default.createElement("div", null,
            react_1.default.createElement("form", { className: "loginSignUpFields" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { type: "email", id: "email", placeholder: "Enter email", value: loginInfo.email, onChange: handleChange })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { type: "password", id: "password", placeholder: "Enter password", value: loginInfo.password, onChange: handleChange })),
                react_1.default.createElement("button", { type: "submit", onClick: handleSubmit, className: "loginSignUpButtons" }, "Login"),
                console.log(loginInfo)))));
};
exports.default = Login;
