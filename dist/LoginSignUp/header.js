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
    react_1.default.createElement("nav", { className: "navbar navbar-dark bg-dark fixed-top" },
        react_1.default.createElement("div", { className: "row col-12 d-flex justify-content-center text-white" },
            react_1.default.createElement("span", { className: "h3" }, "Git Connected"))));
};
exports.default = Header;
