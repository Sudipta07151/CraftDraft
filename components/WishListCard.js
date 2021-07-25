import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { mdiCurrencyInr } from "@mdi/js";
import SvgIcon from "@material-ui/core/SvgIcon";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Grid from "@material-ui/core/Grid";
import noImage from "../public/no_image.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 700,
    padding: "20px",
    border: "solid 3px #ffb300",
    margin: "20px",
    maxHeight: "600px",
    minHeight: "450px",
    "&:hover": {
      transform: "rotate(1deg)",
      transitionTimingFunction: "ease",
    },
  },
  media: {
    height: 200,
  },
});

export default function WishListCard({ data }) {
  // console.log(data)
  const classes = useStyles();
  // console.log(mdiCurrencyInr)
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} sm={12} lg={4}>
        <Card className={classes.root} elevation={2}>
          <Link href={`/product/${data.key}`} passHref>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  data.image
                    ? data.image.formats.small.url
                    : "https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                title="data.title"
              />
              <Chip
                label={data.price}
                component="h2"
                variant="outlined"
                icon={
                  <SvgIcon>
                    <path d={mdiCurrencyInr} />
                  </SvgIcon>
                }
                style={{
                  borderColor: "white",
                  position: "absolute",
                  top: -20,
                  left: -15,
                  backgroundColor: "white",
                  border: "solid 1px #ffb300",
                  fontSize: "20px",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            {/* <Chip
                            label={data.price}
                            variant='outlined'
                            icon={
                                <SvgIcon>
                                    <path d={mdiCurrencyInr} />
                                </SvgIcon>
                            }
                            style={{ borderColor: 'white' }}
                        /> */}
            <Chip
              icon={<FavoriteBorderIcon />}
              label="REMOVE"
              variant="outlined"
              clickable={true}
              color="primary"
            />
            <Button variant="outlined" color="primary">
              ADD TO CART
            </Button>
            <Link href={`/product/${data.key}`} passHref>
              <Button variant="outlined" color="secondary">
                DETAILS
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
