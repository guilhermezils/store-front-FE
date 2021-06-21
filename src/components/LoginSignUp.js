import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CreateUserForm from './CreateUserForm';


class LoginSignUp extends Component{
    render(){
    return (
        <div>
            <h1>Login/SignUp</h1>
            {/* <Link to="/NewUserForm">New User?</Link> */}
            <CreateUserForm />
            {/* <button> SignUp </button> */}
        </div>
    )}
}

export default LoginSignUp;

