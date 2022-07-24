import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';

const SignupFormSuccess = () => {
    console.log("hello")
    return (
        <div className="c">
            <div className="app-wrapper">
                <h1 className="form-success">Account Created!</h1>
                <div className="submit">
                    <Link to="/admindashboard">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupFormSuccess;
