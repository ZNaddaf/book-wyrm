import React, { Component } from 'react';
import { useAuth0 } from "../react-auth0-spa";

class userEmail extends Component {
    userID = () => {
        const { user } = useAuth0();
        return (
            <div> {user.email} </div>
        )
    }

}


export default userEmail