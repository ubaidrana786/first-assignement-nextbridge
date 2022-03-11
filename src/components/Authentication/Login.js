import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useFormik } from "formik";

export const Login = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.email !== "" && values.password !== "") {
          window.localStorage.setItem("Token", "12345678")
        history.push("/");
      }
    },
  });

  return (
    <div className="form-bg">
      <div className="container mt-5">
        <div className="form-bg">
          <div className="container">
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-offset-5 col-md-5 col-sm-offset-3 col-sm-6">
                <div className="form-container">
                  <h3 className="title">Sign-In Account</h3>
                  <ul className="social-links">
                    <li>
                      <a href="">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                  <span className="description">
                    or use you email for registration:
                  </span>
                  <form
                    className="form-horizontal"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      {/* <input type="checkbox" className="checkbox"> */}
                      <span className="check-label">
                        I agree to the <a href="">Terms</a> and{" "}
                        <a href="">Privacy Policy.</a>
                      </span>
                    </div>
                    <Link to="/signup" className="btn signup">
                      Sign up
                    </Link>
                    <button type="submit" className="btn signin">
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
