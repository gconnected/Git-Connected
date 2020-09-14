import React, { useState } from "react";

interface loginInfo {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loginInfo, setLogin] = useState<loginInfo>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // INSERT AXIOS REQUEST
    console.log("success");
  };
  return (
    <div className="forms">
      <div>
        <span className="h3">Login</span>
      </div>
      <form>
        <div className="form-group text-left">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={loginInfo.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={loginInfo.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="mb-3 btn btn-success"
          onClick={handleSubmit}
        >
          Register
        </button>
        {console.log(loginInfo)}
      </form>
    </div>
  );
};

export default Login;
