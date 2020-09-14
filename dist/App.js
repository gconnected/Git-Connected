"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import regularly as react
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./loginSignUp/header"));
const register_1 = __importDefault(require("./loginSignUp/register"));
const search_1 = __importDefault(require("./searchResult/search"));
// import { whatever you want } from 'react-bootstrap';
const userProfile_1 = __importDefault(require("./userProfile/userProfile"));
// Setting app as functional component
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(header_1.default, null),
        true ? (react_1.default.createElement("div", { className: "signUp" },
            react_1.default.createElement(register_1.default, null))) : null,
        false ? (react_1.default.createElement("div", { className: "profile" },
            react_1.default.createElement(userProfile_1.default, null))) : null,
        react_1.default.createElement(search_1.default, null)));
};
exports.default = App;
