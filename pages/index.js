import React from 'react';
import Layout from '../components/Layout';
import { API_URL } from '../config/index';
import Link from 'next/link';
import CardList from '../components/CardList';
const PER_PAGE = 3;
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '250px'
    },
}));

const home = ({ pro_data, page }) => {
    const classes = useStyles();
    // console.log(pro_data);
    return (
        <div style={{ height: '100%', postiton: 'absolute' }}>
            <Layout>
                <Grid container className={classes.root} >
                    {pro_data.length === 0 ? 'Nothing To Show' : <CardList products={pro_data} />}
                    <Grid container>
                        <Grid item xs={12} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Link href={`/?page=${page - 1}`} passHref>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    href="#outlined-buttons"
                                    style={{
                                        marginBottom: '40px',
                                        marginRight: '10px'
                                    }}
                                >
                                    PREV
                                </Button>
                            </Link>
                            <Link href={`/?page=${page + 1}`} passHref>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    style={{
                                        marginBottom: '40px'
                                    }}
                                >
                                    NEXT
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ query: { page = 1 } }) {
    console.log('page:', page)
    const start = +page === 1 ? 0 : (page - 1) * PER_PAGE

    //Fetch Total Count

    const res = await fetch(`${API_URL}/product-lists/?_sort=created_at:ASC&_limit=${PER_PAGE}&_start=${start}`)
    const pro_data = await res.json();
    return {
        props: {
            pro_data,
            revalidate: 1,
            page: +page
        },
    }
}
export default home;
