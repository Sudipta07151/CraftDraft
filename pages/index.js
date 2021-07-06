import React from 'react';
import Layout from '../components/Layout';
import { API_URL } from '../config/index';
import CardList from '../components/CardList';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '250px'
    },
}));

const home = ({ pro_data }) => {
    const classes = useStyles();
    console.log(pro_data);
    return (
        <div style={{ height: '100%', postiton: 'absolute' }}>
            <Layout>
                <Grid container className={classes.root} >
                    {pro_data.length === 0 ? 'Loading' : <CardList products={pro_data} />}
                </Grid>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/product-lists/?_sort=created_at:ASC&_limit=3`)
    const pro_data = await res.json();
    return {
        props: {
            pro_data,
            revalidate: 1
        },
    }
}
export default home;
