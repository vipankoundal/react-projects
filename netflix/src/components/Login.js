import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../authenticate/firebaseConfig";

const Login = ({ page }) => {
  //firebase setup
  const app = initializeApp(firebaseConfig);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExist, setIsUserExist] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  const onSigninClickHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (auth) {
          navigate("/dashboard");
        }
      })
      .catch(() => {
        setIsUserExist(true);
      });
  };

  const emailOnchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnchangeHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ? "login" : "register"}</h1>
        <br />
        <form>
          <input
            className="form-control"
            value={email}
            onChange={emailOnchangeHandler}
            type="email"
            placeholder="Email"
          />

          <input
            className="form-control"
            value={password}
            onChange={passwordOnchangeHandler}
            type="password"
            placeholder="Password"
          />

          <button
            className="btn btn-danger btn-block"
            onClick={onSigninClickHandler}
          >
            {page ? "signIn" : "register"}
          </button>
          <br />

          {page && (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label text-white"
                htmlFor="flexCheckDefault"
              >
                Remember Me
              </label>
            </div>
          )}
        </form>
        <br />
        <br />
        {isUserExist && (
          <p className="text-danger">
            user name does not exist | go for Signup
          </p>
        )}
        <div className="login-form-other">
          <div className="login-signup-now">
            <span>{page ? "New a netfilx" : "exist user"} &nbsp;</span>
            <Link className=" " to={page ? "/register" : "/login"}>
              {page ? "Sign up now" : "sign in"}
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
    </div>
  );
};

export default Login;
