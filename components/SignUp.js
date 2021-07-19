import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Layout from './Layout';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AuthContext from 'context/authContext';

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

export default function SignUp() {
    const classes = useStyles();

    const { register, error } = useContext(AuthContext)

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfPassword] = useState('');

    useEffect(() => error && toast.error('BAD SIGNUP REQUEST'));

    const handleFname = (e) => {
        setFname(e.target.value);
    }
    const handleLname = (e) => {
        setLname(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handlePassowrd = (e) => {
        setPassword(e.target.value);
    }
    const handleCnfPassowrd = (e) => {
        setCnfPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== cnfpassword) {
            toast.error("Confirm Password did not match");
            return
        }
        const user = {
            // fname: fname,
            // lname: lname,
            username: fname + lname,
            password: password,
            email: email,
        };
        console.log(user);
        register(user)
        setFname('');
        setLname('');
        setPhone('');
        setPassword('');
        setEmail('');
        setCnfPassword('');

    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3}>
                <CssBaseline />
                <Layout>
                    <div className={classes.paper}>
                        <ToastContainer autoClose={1000} />
                        <Avatar className={classes.avatar} style={{ backgroundColor: 'orange' }}>
                            <LockOutlinedIcon color='primary' />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={handleFname}
                                        value={fname}
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={handleLname}
                                        value={lname}
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        onChange={handleEmail}
                                        type="email"
                                        value={email}
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="phone"
                                        value={phone}
                                        onChange={handlePhone}
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
                                        onChange={handlePassowrd}
                                        label="Password"
                                        type="password"
                                        value={password}
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="cnfpassword"
                                        onChange={handleCnfPassowrd}
                                        label="Confirm Password"
                                        value={cnfpassword}
                                        type="password"
                                        id="cnfpassword"
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
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/login">
                                        Already have an account? Sign in
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