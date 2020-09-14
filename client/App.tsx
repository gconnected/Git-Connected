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

			<div id="loginSignUpContainer">
				<Login />
				{true ? (
					<div className="signUp">
						<RegistrationForm />
					</div>
				) : null}
			</div>
      
      {true ? (
        <UserProfile />
      ) : null}
      
      <Search />
    </div>
  );
};

export default App;
