import React, { Component } from 'react';
import { Link } from "react-router-dom"

class LoginSignUp extends Component{
    render(){
    return (
        <div>
            <h1>Login</h1>
            <Link to="/NewUserForm">New User?</Link>
            <button> SignUp </button>
        </div>
    )}
}

export default LoginSignUp;

