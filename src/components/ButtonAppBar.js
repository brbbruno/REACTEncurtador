import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useAuth0} from "@auth0/auth0-react";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const {user, isAuthenticated, logout} = useAuth0();

    return (
        isAuthenticated && (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="body2" align={"left"} className={classes.title}>
                            <Avatar src={user.picture} alt={user.name}/>
                        </Typography>
                        <Typography variant="body2" align={"left"} className={classes.title}>
                            <h1> Olá {user.name}</h1>
                        </Typography>
                        <Button color="secondary" variant={"contained"} onClick={logout}>LOG OUT</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    );
}