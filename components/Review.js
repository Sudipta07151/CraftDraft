import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { deepOrange, green } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AuthContext from "context/authContext";

// const products = [
//   { name: "Product 1", desc: "A nice thing", price: "$9.99" },
//   { name: "Product 2", desc: "Another thing", price: "$3.45" },
//   { name: "Product 3", desc: "Something else", price: "$6.51" },
//   { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
//   { name: "Shipping", desc: "", price: "Free" },
// ];
// const addresses = [
//   "1 Material-UI Drive",
//   "Reactville",
//   "Anytown",
//   "99999",
//   "USA",
// ];
// const payments = [
//   { name: "Card type", detail: "Visa" },
//   { name: "Card holder", detail: "Mr John Smith" },
//   { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
//   { name: "Expiry date", detail: "04/2024" },
// ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(20),
    height: theme.spacing(15),
  },
  square2: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function Review({ data }) {
  const classes = useStyles();
  console.log("REVIEW", data);

  const { userShopData } = useContext(AuthContext);
  console.log("USER DATA:", userShopData);

  const matches = useMediaQuery("(min-width:600px)");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {/* {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))} */}
        <ListItem className={classes.listItem} key={data.id}>
          <ListItemText
            primary={data.title}
            secondary={`DISCOUNT ${data.discount}%`}
          />
          <ListItemText>
            <Avatar
              variant="square"
              className={matches ? classes.square : classes.square2}
              src={data.image.url}
            ></Avatar>
          </ListItemText>
          <Typography variant="body2">{data.price}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {Math.floor(data.price * (1 - data.discount / 100))}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {userShopData.FirstName} {userShopData.LastName}
          </Typography>
          <Typography gutterBottom>Address: {userShopData.address}</Typography>
          <Typography gutterBottom>PinCode: {userShopData.zipcode}</Typography>
          <Typography gutterBottom>Email: {userShopData.email}</Typography>
          <Typography gutterBottom>Phone: {userShopData.phone}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          {/* <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> */}
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>CASH ON DELIVERY</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
