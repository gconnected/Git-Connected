import React from "react";

/**Header Function in TypeScript
 * Typescript: R
 * React.FC = Functional Component of React.
 */
const Header: React.FC = () => {
  return (
    // Bootstrap Navbar
    <nav className="navbar navbar-dark bg-dark fixed-top d-flex justify-content-center">
      <div className="row col-12 text-white d-flex justify-content-center">
        <span id="gitConnected" className="h3">gitConnected.</span>
      </div>
    </nav>
  );
};
export default Header;
