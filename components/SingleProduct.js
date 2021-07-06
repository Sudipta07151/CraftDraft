import React from 'react'

import Chip from '@material-ui/core/Chip';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        height: 300,
        position: 'absolute',
        top: 60
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '50%',
        height: '100%'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function SingleProduct({ data }) {
    const classes = useStyles();
    const theme = useTheme();
    console.log(data)
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={data.image.formats.small.url}
                title={data.title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {data.description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginRight: '20px' }}
                    >
                        ADD TO CART
                    </Button>
                    <Chip
                        icon={<FavoriteBorderIcon />}
                        label='WISHLIST'
                        variant='outlined'
                        clickable={true}
                        color='primary'
                    />
                </div>
            </div>
        </Card>
    );
}
