import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"

export const Login = ()=>{
    return(
<div className="form-bg">
    <div className="container mt-5">
    <div className="form-bg">
    <div className="container">
        <div className="row" style={{justifyContent:"center"}}>
            <div className="col-md-offset-5 col-md-5 col-sm-offset-3 col-sm-6">
                <div className="form-container">
                    <h3 className="title">Sign-In Account</h3>
                    <ul className="social-links">
                        <li><a href=""><i className="fab fa-google"></i></a></li>
                        <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    </ul>
                    <span className="description">or use you email for registration:</span>
                    <form className="form-horizontal">
                       
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            {/* <input type="checkbox" className="checkbox"> */}
                            <span className="check-label">I agree to the <a href="">Terms</a> and <a href="">Privacy Policy.</a></span>
                        </div>
                        <Link to="/signup" className="btn signup">Sign up</Link>
                        <Link to="/login" className="btn signup">Sign In</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
    )
};

