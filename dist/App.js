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
// import regularly as react
const react_1 = __importStar(require("react"));
const header_1 = __importDefault(require("./loginSignUp/header"));
const register_1 = __importDefault(require("./loginSignUp/register"));
const userProfile_1 = __importDefault(require("./userProfile/userProfile"));
// Setting app as functional component
const App = () => {
    // using count as state hooks
    const [login, setLogin] = react_1.useState({
        email: "",
        password: "",
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(header_1.default, null),
        true ? (react_1.default.createElement("div", { className: "signUp" },
            react_1.default.createElement(register_1.default, null))) : null,
        false ? (react_1.default.createElement("div", { className: "profile" },
            react_1.default.createElement(userProfile_1.default, null))) : null));
};
exports.default = App;
