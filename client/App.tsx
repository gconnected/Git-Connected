// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import Search from "./searchResult/search";
// import { whatever you want } from 'react-bootstrap';
import UserProfile from "./userProfile/userProfile";

// Setting app as functional component
const App: React.FC = () => {
  return (
    <div>
      <Header />
      {true ? (
        <div className="signUp">
          <RegistrationForm />
        </div>
      ) : null}
			{/* <UserProfile /> */}
      {false ? (
        <div className="profile">
          <UserProfile />
        </div>
      ) : null}
			<Search />
    </div>
  );
};

export default App;
