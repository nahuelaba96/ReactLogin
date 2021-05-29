import React, { useState, useEffect } from "react";
import iphone from '../images/iphoneimg.png'
import logo from '../images/logo.png';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = email === "" || password === "";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "email@gmail.com" && password === "password")
      console.log("Connection sucessfull");
    else {
      setEmail("");
      setPassword("");
      setError("Email or password incorrect");
    }
  };

  useEffect(() => {
    document.title = "Login - Practice";
  }, []);

  return (
    <div className="container">
      <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center">
        <div>
          <img className="me-4 img-fluid" src={iphone} width="450 px" />
        </div>
        {error && <p className="mb-4 fw-bold text-danger">{error}</p>}
        <div className="col-5">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center m-4">
                <img className="me-4 img-fluid" src={logo} width="200 px" />
              </div>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    aria-label="Enter your email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <input
                    aria-label="Enter your password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className={`btn btn-primary ${isInvalid && "opacity-50"}`}
                    disabled={isInvalid}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card mt-2">
            <div className="card-body d-flex justify-content-center">
              <div class="d-inline-flex bd-highlight ">
                <p className="p-1">Don't have an account?</p>
                <a className="p-1">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
