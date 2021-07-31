import React from "react";
import Layout from "../../components/Layout";
import WishListComponent from "@/components/WishListComponent";
import { API_URL } from "config";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "100px",
  },
}));

export default function Wishlist(props) {
  console.log(props);
  const [wishList, setWishList] = React.useState();
  React.useEffect(() => {});
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className={classes.root}>
        <WishListComponent data={props} style={{ marginTop: "400px" }} />
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  //Fetch Total Count

  const res = await fetch(`${API_URL}/product-lists/?_sort=created_at:ASC`);
  const pro_data = await res.json();
  return {
    props: {
      pro_data,
      revalidate: 1,
    },
  };
}
