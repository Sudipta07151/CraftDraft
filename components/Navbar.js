import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import LoginBtn from './LoginBtn';
import LoginAvatar from './LoginAvatar';
import LogoutBtn from './LogoutBtn';

import AuthContext from 'context/authContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Kirang Haerang',
        fontSize: 15
    }
})


const Navbar = () => {
    const classes = useStyles();
    const { user, Logout } = useContext(AuthContext)

    return (
        <div className={classes.root}>
            <AppBar position="fixed"
                style={{ backgroundColor: '#ef6c00' }}
                elevation={1}
            >
                <Toolbar>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h6" className={classes.title}>
                            <Link href='/'> CRAFT_DRAFT</Link>
                        </Typography>
                    </ThemeProvider>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Link href={`/product/productlibrary?term=all`} passHref>
                            <Badge badgeContent={0} color="secondary">
                                <SearchIcon />
                            </Badge>
                        </Link>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <LoyaltyIcon />
                        </Badge>
                    </IconButton>
                    {!user ? <LoginBtn /> : <LoginAvatar />}
                    {user ? <LogoutBtn handleLogout={Logout} /> : null}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;