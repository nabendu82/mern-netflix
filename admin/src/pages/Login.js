import React, { useContext } from 'react'
import { useState } from 'react';
import styled from "styled-components";
import { login } from '../context/authContext/apiCalls';
import { AuthContext } from '../context/authContext/AuthContext';

const LoginSection = styled.section`
    margin: auto;
    width: 500px;
    overflow: auto;
    padding: 3rem 2rem;
`

const LoginForm = styled.form`
    padding: 2rem;
    background: #f4f4f4;
    label {
        display: block;
    }
    input[type='email'], input[type='password'] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .btn {
        display: block;
        padding: 10px 15px;
        border: 0;
        background: #333;
        color: #fff;
        border-radius: 5px;
        margin: 5px 0;
        cursor: pointer;
    }
`

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    };
    return (
        <LoginSection>
            <LoginForm onSubmit={handleLogin}>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input className="btn" type="submit" value="Login" disabled={isFetching} />
            </LoginForm>
        </LoginSection>
    )
}

export default Login
