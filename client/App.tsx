// import regularly as react
import React, { useState } from "react";
import Header from "./component/header";
import RegistrationForm from "./component/register";

// Setting app as functional component
const App: React.FC = () => {
  // using count as state hooks
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="App">
        <Header />
        <RegistrationForm />
      </div>
      <h1>App has rendered</h1>
    </div>
  );
};

export default App;
