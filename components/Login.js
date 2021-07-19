import React, { useState, useContext, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import Layout from '../components/Layout';

import AuthContext from 'context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright@CRAFT_DRAFT'}
            <Link href="/">
                {' '}
            </Link>{' '}
            {new Date().getFullYear()}
            &nbsp;
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        margin: theme.spacing(4),
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login() {

    const { Login, error } = useContext(AuthContext);

    useEffect(() => error && toast.error(error));

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handlePassowrd = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = {
            email: email,
            password: password,
            phone: phone,
        };
        console.log(value);
        Login({ email, password })
        setPhone('');
        setPassword('');
        setEmail('');
    }
    return (
        <Container component="main" maxWidth="xs">
            <ToastContainer autoClose={1000} />
            <Paper elevation={3}>
                <CssBaseline />
                <Layout>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} style={{ backgroundColor: 'orange' }}>
                            <VpnKeyIcon color='primary' />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        type="email"
                                        label="Email Address"
                                        onChange={handleEmail}
                                        name="email"
                                        value={email}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={handlePhone}
                                        name="phone"
                                        value={phone}
                                        label="phone"
                                        id="phone"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={handlePassowrd}
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                type="submit"
                            >
                                Login
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/signingUp">
                                        Dont have an account? SignUp
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Link href="/">
                                    Go Back Home? Sign in
                                </Link>
                            </Grid>
                        </form>
                    </div>
                </Layout>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Paper>
        </Container>
    );
}