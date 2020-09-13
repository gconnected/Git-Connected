// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import Search from "./searchResult/search";
// import { whatever you want } from 'react-bootstrap';
import UserProfile from "./userProfile/userProfile";

interface loginInfo {
  email: string;
  password: string;
}

// Setting app as functional component
const App: React.FC = () => {
  // using count as state hooks
  const [login, setLogin] = useState<loginInfo>({
    email: "",
    password: "",
  });
  return (
    <div>
      <Header />
      {true ? (
        <div className="signUp">
          <RegistrationForm />
        </div>
      ) : null}
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
