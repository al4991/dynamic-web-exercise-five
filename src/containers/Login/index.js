import React from 'react'; 

import LoginForm from '../../components/LoginForm/index';

export default function Login(props) {
    return (
        <LoginForm submitFunction={props.loginFunction} /> 
    )
}