import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Button} from "@material-ui/core";

function LoginButton() {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
            <div align={"center"} >
                <Button onClick={() => loginWithRedirect()}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh'}}
                        variant={"contained"}
                        color="primary">
                    Log in
                </Button>
            </div>
        )
    );
}

export default LoginButton;