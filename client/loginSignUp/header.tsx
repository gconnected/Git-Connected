import React from "react";

/**Header Function in TypeScript
 * Typescript: R
 * React.FC = Functional Component of React.
 */
const Header: React.FC = () => {
  return (
    // Bootstrap Navbar
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">Git Connected</span>
      </div>
    </nav>
  );
};
export default Header;
