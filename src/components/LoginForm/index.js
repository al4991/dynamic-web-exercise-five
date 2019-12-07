import React from 'react'; 

export default function LoginForm(props) { 
    return ( 
        <div> 
            <form onSubmit={e => props.submitFunction(e)}>
                <label htmlFor="loginEmail">Email</label>
                <input type="email" name="loginEmail" placeholder="email"/>
                <label htmlFor="loginPassword">Password</label>
                <input type="password" name="loginPassword" placeholder="password"/>
                <button>Log In</button>
            </form> 
        </div>
    )
}