// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import Search from "./searchResult/search";
import Results from "./searchResult/results";

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
      {false ? (
        <div className="App">
          <RegistrationForm />
        </div>
      ) : null}
      <h1>App has rendered</h1>
			<Search />
			<Results />
    </div>
  );
};

export default App;
