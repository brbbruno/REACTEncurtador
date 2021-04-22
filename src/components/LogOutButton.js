import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Button, Fade, Grid} from "@material-ui/core";
import Grow from "@material-ui/core/Grow";


function LogOutButton() {
    const {logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
                <Grow in={true} style={{transitionDelay: '500ms'}}>
                    <Grid align={"center"}>
                        <Button color="secondary" variant={"contained"} onClick={logout}>
                            Log Out
                        </Button>
                    </Grid>
                </Grow>
        )
    );
}

export default LogOutButton;