import LoginButton from "./components/LoginButton";
import {useAuth0} from '@auth0/auth0-react';
import {Box, Fade, Grow} from "@material-ui/core";
import ApiData from "./components/ApiData";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
    const {isLoading, isAuthenticated} = useAuth0();
    if (isLoading) return <div
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
    </div>
    return (
        <>
            {isAuthenticated}
            <Fade in={true}>
                <h1 align={"center"}>Bem vindo ao Encurtador de URL</h1>
            </Fade>
            <Grow in={true} >
                <Box boxShadow={1} >
                    <ButtonAppBar/>
                    <LoginButton/>
                    <ApiData/>
                </Box>
            </Grow>
        </>

    )
        ;
}

export default App;
