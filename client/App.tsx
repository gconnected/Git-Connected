// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";

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
    </div>
  );
};

export default App;
