import React, { useState } from "react";

/**Setting type of state and its components.
 * Set to the same shape as the state.
 */
interface signUpInfo {
  email: string;
  password: string;
}

/**Creating functional component in react.
 * This component uses signUp as our state through react hooks
 */
const RegistrationForm: React.FC = (props) => {
	// React Hooks assigning signUpInfo as type to state
	// signUp -> state and setSignUp -> setState()
  const [signUp, setSignUp] = useState<signUpInfo>({
    email: "", // value has to be string
    password: "", // value has to be string
  });

  /**
   * Function to handle event changes in text boxes.
   * @param e: needs to be declared with React.ChangeEvent type pointed at HTMLInputElement.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// const id = e.target.id --> input id
		// const value - e.target.value --> input value
    const { id, value } = e.target;
    setSignUp((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  /**
   * Function to handle mouse events for submitting the form.
   * @param event: TypeScript will not allow onClick events to be tied to the e parameter.
   * Specified with event and declared with React.MouseEvent type pointed at HTMLElement.
   */
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		// INSERT AXIOS REQUEST
    console.log("success");
  };

  return (
    <div className="signup">
      <form className="loginSignUpFields">
        {/* Email */}
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={signUp.email}
            onChange={handleChange}
          />
        {/* Password */}
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={signUp.password}
            onChange={handleChange}
          />
        </div>
        {/* Need to add an click function that takes the values of the form and submits it to the server */}
        <button
          type="submit"
					onClick={handleSubmit}
					className="loginSignUpButtons"
        >
          Register
        </button>
        {console.log(signUp)}
      </form>
    </div>
  );
};

export default RegistrationForm;
