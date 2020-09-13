// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
import Search from "./searchResult/search";
// import { whatever you want } from 'react-bootstrap';

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
      <h1>app has been loaded</h1>
      <Header />
      {true ? (
        <div className="App">
          <RegistrationForm />
        </div>
      ) : null}
      <h1>App has rendered</h1>
			<Search />
    </div>
  );
};

export default App;
