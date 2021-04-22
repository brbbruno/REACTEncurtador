import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import AppRestCallAPI from "./AppRestCallAPI";

function ApiData() {
    const {isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
                <AppRestCallAPI/>
        )
    );
}

export default ApiData;