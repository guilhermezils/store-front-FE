import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import SignUp from './SignUpForm';
import LoginForm from './LoginForm';


class LoginSignUp extends Component{
    render(){
    return (
        <div>
            <h1>SignUp</h1>
            {/* <Link to="/NewUserForm">New User?</Link> */}
            <SignUp />
            {/* <button> SignUp </button> */}
            <h1>Login</h1>
            {/* <Link to="/NewUserForm">New User?</Link> */}
            <LoginForm />
            {/* <button> SignUp </button> */}

        </div>
    )}
}

export default LoginSignUp;

