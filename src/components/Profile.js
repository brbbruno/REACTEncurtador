import {useAuth0} from '@auth0/auth0-react';
import Image from 'material-ui-image'
import {AppBar, Box, Grid, Paper, Toolbar} from "@material-ui/core";
import LogOutButton from "./LogOutButton";
import {makeStyles} from "@material-ui/core/styles";

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

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    const classes = useStyles();
    return (
        isAuthenticated && (
            <div className={classes.root}>
                <AppBar position={"static"}>
                    <Toolbar>
                        <h1>
                            <div className={"style"}>
                                <Box width={0.1} boxShadow={3} className="style">
                                    <Image src={user.picture} alt={user.name}

                                    />
                                </Box>
                            </div>
                            <div className={"style"}
                                 style={{
                                     display: 'flex',
                                     justifyContent: 'center',
                                     alignItems: 'center'
                                 }}>
                                <text>
                                    {user.name}
                                </text>
                            </div>
                            <text
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>{user.email}</text>
                        </h1>
                        <div align={"right"}>
                            <LogOutButton/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    )
}

export default Profile;