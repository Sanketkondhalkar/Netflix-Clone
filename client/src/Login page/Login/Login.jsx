import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./Login.css";
import { loginApi } from "../../service/api";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../Store/authSlice";

const Login = ({ isauthenticated }) => {
  const { register } = useSelector((state) => state);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loginfild, setloginfild] = useState({
    email: "",
    password: "",
  });

  const logininput = (e) => {
    setloginfild({ ...loginfild, [e.target.name]: e.target.value });
  };

  const submitLogin = async () => {
    const data = await loginApi(loginfild);
    console.log(data);

    if (data.success) {
      Swal.fire("Good job!", data?.message, "success");
      dispatch(changeStatus(data.success));
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data?.message,
      });
    }
  };

  return (
    <div className="Login_conatiner">
      {isauthenticated ? (
        ""
      ) : (
        <>
          <Navbar />
          <div className="conatiner_login">
            <div className="login_box">
              <h1>Sign in</h1>
              <div className="inputbox">
                <div className="email">
                  <input
                    type="text"
                    placeholder="Enter youe Email Id"
                    name="email"
                    onChange={logininput}
                    value={loginfild.email}
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={logininput}
                    value={loginfild.password}
                  />
                </div>
                <button className="submitlogin" onClick={submitLogin}>
                  Sign in
                </button>
                <div className="buttondata">
                  <div className="left">
                    <input type="checkbox" name="" id="" />
                    <lable className="need">Remember me</lable>
                  </div>
                  <div className="right">
                    <p className="need">Need Help?</p>
                  </div>
                </div>
                <p>
                  New to Netflix?
                  <Link to="/register">
                    <span> Sign up now.</span>
                  </Link>
                </p>

                <lable>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. Learn more.
                </lable>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
