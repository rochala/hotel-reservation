import React from "react";
import { AppBar, Container, List, ListItem, ListItemText, Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: 'flex',
        // justifyContent: 'space-between'
    },
    navDisplayFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    linkTextDisplay: {
        // textDecoration: 'none',
        // textTransform: 'uppercase',
        // color: 'white'
    },
    navIcon: {
        width: '50px',
        height: '50px'
    },
    title: {
        paddingTop: 4,
        color: 'white',
        flexGrow: 1,
    },
    boxFlex: {
        display: 'flex'
    }
})

const Header = (props) => {
    const classes = useStyles();

    const logout = () => {
        sessionStorage.removeItem('session')
        window.location.href = '/';
    }

    return (
        <AppBar position="static" className={classes.navColor}>
            <Toolbar>
                <Container className={classes.navbarDisplayFlex}>
                <IconButton component={ Link } to="/" edge="start" color="inherit" aria-label="home">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h4" className={classes.title}>HOTEL</Typography>
                <Button component={ Link } to="/reservations" color="inherit">RESERVATIONS</Button>
                { sessionStorage.getItem('session') ?
                    <Box className={classes.boxFlex}>
                        <Button component={ Link } to="/profile" color="inherit">YOUR ACCOUNT</Button>
                        <Button onClick = { logout } color="inherit">LOGOUT</Button>
                    </Box>
                      :
                    <Box className={classes.boxFlex}>
                       <Button component={ Link } to="/login" color="inherit">LOGIN</Button>
                       <Button component={ Link } to="/sign-up" color="inherit">SIGN UP</Button>
                    </Box>
                }
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header
