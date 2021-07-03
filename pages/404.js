import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'

import Typography from '@material-ui/core/Typography';
import BlockIcon from '@material-ui/icons/Block';


const NotFoundPage = () => {
    return (
        <div>
            <Layout title="Craft_It|Page Not Found">
                <Typography variant="h3" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: '60vh'
                }}>
                    <BlockIcon fontSize="large" />
                    404 NOT FOUND
                </Typography>
            </Layout>
            <Typography component="div"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Link href="/">Go Back Home</Link>
            </Typography>
        </div>
    );
}

export default NotFoundPage;
