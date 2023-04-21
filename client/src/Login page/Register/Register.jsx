import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./Register.css";
import { registerApi } from "../../service/api";
import { useDispatch } from "react-redux";
import { registration } from "../../Store/authSlice";

const Register = ({ isauthenticated }) => {
  const dispatch = useDispatch();

  const [inputfild, setinputfiled] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const registerinput = (e) => {
    setinputfiled({ ...inputfild, [e.target.name]: e.target.value });
  };

  const submitRegister = async () => {
    const data = await registerApi(inputfild);
    dispatch(registration(data.register));
    // console.log(data);
  };
  return (
    <div className="Register_conatiner">
      {isauthenticated ? "" : <Navbar />}
      <div className="conatiner_Register">
        <div className="Register_box">
          <h1>Create a New User</h1>
          <div className="inputbox">
            <div className="input1">
              <div className="left">
                <input
                  type="text"
                  placeholder="Enter your First name"
                  name="firstname"
                  onChange={registerinput}
                  value={inputfild.firstname}
                />
              </div>
              <div className="right">
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  name="lastname"
                  onChange={registerinput}
                  value={inputfild.lastname}
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Enter your Email"
              className="inputdemo"
              name="email"
              onChange={registerinput}
              value={inputfild.email}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="inputdemo"
              name="password"
              onChange={registerinput}
              value={inputfild.password}
            />

            <button className="submitRegister" onClick={submitRegister}>
              <Link>Sign up</Link>
            </button>
            <p>
              Allready to Netflix?
              <Link to="/signin">
                <span> Sign In now.</span>
              </Link>
            </p>
            <lable>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </lable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
