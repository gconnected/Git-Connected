"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**Header Function in TypeScript
 * Typescript: R
 * React.FC = Functional Component of React.
 */
const Header = () => {
    return (
    // Bootstrap Navbar
    react_1.default.createElement("nav", null,
        react_1.default.createElement("div", { className: "nav-bar-div" },
            react_1.default.createElement("span", { id: "gitConnected" }, "gitConnected.")),
        react_1.default.createElement("div", { id: "taglineContainer" },
            react_1.default.createElement("p", { id: "tagline" }, "1-on-1 Networking for Tech Professionals"))));
};
exports.default = Header;
