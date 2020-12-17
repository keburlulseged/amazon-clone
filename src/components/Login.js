import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //some fancy firebase login shittttttt.....
  }

  const register = (e) => {
    e.preventDefault();

    // do some fancy firebase register shittttt.......
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazonLogo"
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="loginSignInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
        </p>
        <button
          className="loginRegisterButton"
          onClick={register}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
