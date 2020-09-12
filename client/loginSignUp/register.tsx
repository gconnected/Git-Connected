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

  return (
    <div>
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="examplePassword">Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="examplePassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmpassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
