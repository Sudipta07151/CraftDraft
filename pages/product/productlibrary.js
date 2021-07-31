import React from "react";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import Selector from "@/components/Selector";
import Grid from "@material-ui/core/Grid";
import { API_URL } from "../../config/index";

import CardList from "@/components/CardList";
import qs from "qs";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Anton",
    fontSize: 40,
  },
});

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: "100px",
    paddingLeft: "20px",
    minHeight: "100vh",
  },
});

export default function ProductLibrary({
  pro_data,
  all_data,
  term,
  all_select_data,
}) {
  const classes = useStyles();
  console.log(pro_data, all_data, term);
  var renderData;

  if (pro_data.length == 0 && all_select_data.length == 0) {
    renderData = pro_data;
  }
  if (pro_data.length == 0 && all_select_data.length != 0) {
    renderData = all_select_data;
  }
  if (pro_data.length != 0 && all_select_data.length == 0) {
    renderData = pro_data;
  }

  return (
    <div className={classes.root}>
      <Layout>
        <ThemeProvider theme={theme}>
          <Typography align="center">PRODUCT LIBRARY</Typography>
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
          {renderData.length === 0 ? (
            <CardList products={all_data} />
          ) : (
            <CardList products={renderData} />
          )}
          {/* {pro_data.length === 0 || term === 'all' ? <CardList products={all_data} /> : <CardList products={pro_data} />} */}
          {/* {selectorData.length === 0 || term === 'all' ? <CardList products={all_data} /> : <CardList products={selectorData} />} */}
        </Grid>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query: { term = "all", select } }) {
  console.log("term:", term);
  console.log("select:", select);
  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: term }, { description_contains: term }],
    },
  });

  const resData = await fetch(
    `${API_URL}/product-lists?tags_contains=${select}`
  );
  const selectorData = await resData.json();
  const res = await fetch(`${API_URL}/product-lists?${query}`);
  const data = await res.json();
  const resAll = await fetch(`${API_URL}/product-lists`);
  var dataAll = await resAll.json();
  console.log("selectorData", selectorData);
  console.log("data", data);
  if (select !== undefined && select !== "") dataAll = [];
  return {
    props: {
      pro_data: data,
      all_data: dataAll,
      all_select_data: selectorData,
      term: term,
      revalidate: 1,
    },
  };
}
