import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'fixed',
    },
});

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 15
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ backgroundColor: '#ffa726' }}>
            <ThemeProvider theme={theme}>
                <Typography variant="subtitle1" align="center">
                    Copyright@CRAFT_DRAFT 2021
                </Typography>
            </ThemeProvider>
        </div>
    );
}
export default Footer;