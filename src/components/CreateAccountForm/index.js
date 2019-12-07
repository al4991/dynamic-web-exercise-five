import React from 'react'; 

export default function CreateAccountForm(props) { 
    return ( 
        <div> 
            <form onSubmit={e => props.submitFunction(e)}>
                <label htmlFor="loginEmail">Email</label>
                <input type="email" name="createAccountEmail" placeholder="email"/>
                <label htmlFor="loginPassword">Password</label>
                <input type="password" name="createAccountPassword" placeholder="password"/>
                <button>Create Account</button>
            </form> 
        </div>
    );
}