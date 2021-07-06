import React from 'react'
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import Selector from '@/components/Selector';
import Grid from '@material-ui/core/Grid';
import { API_URL } from '../../config/index';

import CardList from '@/components/CardList';
import qs from 'qs';
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
        minHeight: '100vh'
    },
});

export default function productLibrary({ pro_data, all_data, term }) {
    const classes = useStyles();
    console.log(pro_data, all_data, term)
    return (
        <div className={classes.root}>
            <Layout>
                <ThemeProvider theme={theme}>
                    <Typography align="center">
                        PRODUCT LIBRARY
                    </Typography>
                </ThemeProvider>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} sm={12}>
                        <SearchBar />
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                        <Selector />
                    </Grid>
                </Grid>
                <Grid container>
                    {pro_data.length === 0 || term === 'all' ? <CardList products={all_data} /> : <CardList products={pro_data} />}
                </Grid>
            </Layout>
        </div>
    )
}

export async function getServerSideProps({ query: { term } }) {
    console.log('term:', term)
    const query = qs.stringify({
        _where: {
            _or: [
                { title_contains: term },
                { description_contains: term }
            ]
        }
    })
    const res = await fetch(`${API_URL}/product-lists?${query}`)
    const data = await res.json();
    const resAll = await fetch(`${API_URL}/product-lists`)
    const dataAll = await resAll.json();
    return {
        props: {
            pro_data: data,
            all_data: dataAll,
            term: term,
            revalidate: 1
        },
    }
}