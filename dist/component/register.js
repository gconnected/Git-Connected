"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RegistrationForm = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("form", null,
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("label", { htmlFor: "exampleEmail" }, "Email"),
                react_1.default.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "Enter email" })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("label", { htmlFor: "examplePassword" }, "Enter Password"),
                react_1.default.createElement("input", { type: "password", className: "form-control", id: "password", placeholder: "Enter Password" })),
            react_1.default.createElement("div", { className: "form-group text-left" },
                react_1.default.createElement("label", { htmlFor: "examplePassword" }, "Confirm Password"),
                react_1.default.createElement("input", { type: "password", className: "form-control", id: "confirmpassword", placeholder: "Confirm Password" })))));
};
exports.default = RegistrationForm;
