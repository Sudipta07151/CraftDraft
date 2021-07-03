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
        padding: '20px',
        border: 'solid 3px black',
        margin: '20px'
    },
    media: {
        height: 200,
    },
});

export default function ProductCard() {
    const classes = useStyles();
    console.log(mdiCurrencyInr)
    return (
        <React.Fragment>
            <Card className={classes.root} elevation={2}>
                <Link href={`/product/details/`} passHref>
                    <CardActionArea >
                        <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1602620502036-e52519d58d92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
                            title="Super Mario"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                SUPER MARIO
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Super Mario is a platform game series created by Nintendo based on Mario. Alternatively called the Super Mario Bros. series or simply the Mario series, it is the central series of the greater Mario franchise. At least one Super Mario game has been released for every major Nintendo video game console.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
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