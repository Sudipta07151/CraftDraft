import React from 'react';
import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { mdiCurrencyInr } from '@mdi/js';
import SvgIcon from '@material-ui/core/SvgIcon';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    root: {
        minWidth: 350,
    },
    media: {
        height: 140,
    },
});

export default function ProductCard() {
    const classes = useStyles();
    console.log(mdiCurrencyInr)
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1602620502036-e52519d58d92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            SUPER MARIO
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Chip
                        label="100"
                        variant='outlined'
                        icon={
                            <SvgIcon>
                                <path d={mdiCurrencyInr} />
                            </SvgIcon>
                        }
                        style={{ fontSize: '20px', borderColor: 'white' }}
                    />
                    <Chip
                        icon={<FavoriteBorderIcon />}
                        label='WISHLIST'
                        variant='outlined'
                        clickable={true}
                        color='primary'
                    />
                    <Button variant="outlined" color="primary">
                        ADD TO CART
                    </Button>
                    <Link href={`/product/details/`} passHref>
                        <Button
                            variant="outlined"
                            color="secondary"
                        >
                            DETAILS
                        </Button>
                    </Link>

                </CardActions>
            </Card>
        </React.Fragment>
    );
}