import React from 'react'; 

export default function Login() { 
    return <div> 
        <form>
            <label for="loginEmail">Email</label>
            <input type="email" name="loginEmail" placeholder="email"/>
            <label for="loginPassword">Password</label>
            <input type="email" name="loginPassword" placeholder="password"/>
            <button>Log In</button>
        </form> 
    </div>
}