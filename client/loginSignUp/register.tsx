import React, { useState } from "react";

const RegistrationForm: React.FC = () => {
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
      </form>
    </div>
  );
};

export default RegistrationForm;
