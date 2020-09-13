import React, { useState } from "react";

interface signUpInfo {
  email: string;
  password: string;
}

const RegistrationForm: React.FC = (props) => {
  const [signUp, setSignUp] = useState<signUpInfo>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignUp((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log("success");
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={signUp.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="examplePassword">Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={signUp.password}
            onChange={handleChange}
          />
        </div>
        {/* Need to add an click function that takes the values of the form and submits it to the server */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>
        {console.log(signUp)}
      </form>
    </div>
  );
};

export default RegistrationForm;
