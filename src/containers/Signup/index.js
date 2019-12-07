import React from 'react'; 

import CreateAccountForm from '../../components/CreateAccountForm/index';

export default function Signup(props) {
    return (
        <CreateAccountForm submitFunction={props.signupFunction}/> 
    )
}