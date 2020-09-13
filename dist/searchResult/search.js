"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Search = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "Search Component!"),
        react_1.default.createElement("form", { id: "searchBar" },
            react_1.default.createElement("select", { name: "", id: "" },
                react_1.default.createElement("option", { value: "", disabled: true, selected: true }, "Company"),
                react_1.default.createElement("option", { value: "" }, "Apple"),
                react_1.default.createElement("option", { value: "" }, "Google"),
                react_1.default.createElement("option", { value: "" }, "Instagram"),
                react_1.default.createElement("option", { value: "" }, "Other")),
            react_1.default.createElement("input", { type: "text", className: "searchBarInputs", placeholder: "If selected Other, Enter Company" }),
            react_1.default.createElement("input", { type: "text", className: "searchBarInputs", placeholder: "Job Position" }),
            react_1.default.createElement("input", { type: "submit", id: "searchButton" }))));
};
exports.default = Search;
