// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import UserProfile from "./userProfile/userProfile";
import Search from "./searchResult/search";
import Login from "./loginSignUp/login";
// import { whatever you want } from 'react-bootstrap';

// Setting app as functional component
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Login />
      {true ? (
        <div className="signUp">
          <RegistrationForm />
        </div>
      ) : null}

			<Search />

      {false ? (
        <div className="profile">
          <UserProfile />
        </div>
      ) : null}

    </div>
  );
};

export default App;
