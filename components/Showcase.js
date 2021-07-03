import React from 'react'
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
    typography: {
        fontFamily: 'Anton',
        fontSize: 40
    }
})

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        top: '100px',
        paddingLeft: '20px',
    },
});

export default function Showcase() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Typography align="left">
                    FOR YOU
                </Typography>
                <Typography align="left">
                    FOR ALL
                </Typography>
            </ThemeProvider>
        </div>
    )
}
