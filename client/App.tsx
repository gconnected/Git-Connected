// import regularly as react
import React, { useState } from "react";
import Header from "./loginSignUp/header";
import RegistrationForm from "./loginSignUp/register";
// import UserProfile from "./userProfile/userProfile";
// import Search from "./searchResult/search";
import Login from "./loginSignUp/login";

interface componentRenderingInfo {
	status: string;
}

// Setting app as functional component
const App: React.FC = () => {

	const [componentRendering, setComponentRendering] = useState<componentRenderingInfo> ({
		status: "OFF",
	});

	const handleSubmitOne = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setComponentRendering({
			status: "SIGNUP"
		});
	};

	const handleSubmitTwo = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		setComponentRendering({
			status: "LOGIN"
		});
	};
	
  return (
    <div>
      <Header />

			{(componentRendering.status === "OFF") ? (
				<div id="buttonGroup">
					<button
					onClick={handleSubmitOne}
					className="loginSignUpButtons"
					>
						Signup
					</button>
					<button
					onClick={handleSubmitTwo}
					className="loginSignUpButtons"
					>
						Login
					</button>
				</div>
			) : null}

			<div id="loginSignUpContainer">

				{ (componentRendering.status === "LOGIN") ? (
					<div className="logIn">
					<Login />
				</div>
				) : null}

				{ (componentRendering.status === "SIGNUP") ? (
					<div className="signUp">
						<RegistrationForm />
					</div>
				) : null}

			</div>
    
      
      
    </div>
  );
};

export default App;
