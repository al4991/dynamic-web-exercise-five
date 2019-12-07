import React from 'react'; 

export default function UserProfileComponent(props){ 
    console.log(props.user); 
    return (
        <div> 
            <h1> Your Email is </h1>
            <h1> { props.user.email }</h1>
        </div> 
    )
}