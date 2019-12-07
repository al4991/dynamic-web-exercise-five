import React from 'react'; 

import './../../App.css'; 

export default function Header(props) {
    return (
        <header className='Header'> 
            <nav> 
                { props.loggedIn ? <a href='/' >Home</a> : null }
                { !props.loggedIn ? <a href='/login'> Login</a> : null }
                {  props.loggedIn ? <a href='/log-out'>Log Out</a> : null }
                { !props.loggedIn ? <a href='/sign-up'>Sign Up</a> : null }
            </nav>
        </header>
    )
}
