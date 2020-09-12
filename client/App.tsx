// import regularly as react
import React, { useState } from "react";
import * as ReactDOM from "react-dom";

// Setting app as functional component
const App: React.FC = () => {
  // using count as state hooks
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>App has rendered</h1>
      {/* creating a button that changes state on clicked */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default App;
