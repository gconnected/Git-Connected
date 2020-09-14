// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import UserProfile from "./userProfile/userProfile";
import Search from "./searchResult/search";
import Login from "./loginSignUp/login";


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


      {true ? (
        <div className="profile">
          <UserProfile />
        </div>
      ) : null}
      
      <Search />
    </div>
  );
};

export default App;
