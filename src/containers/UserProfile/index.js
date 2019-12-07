import React from 'react'; 

import UserProfileComponent from '../../components/UserProfileComponent/index';

export default function UserProfile(props) {
    return (
        <UserProfileComponent user={props.user} /> 
    )
}