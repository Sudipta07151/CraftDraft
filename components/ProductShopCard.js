import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, green } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    position: "absolute",
    top: "150px",
  },
  table2: {
    maxWidth: "300px",
    position: "absolute",
    top: "150px",
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24)];

export default function ProductShopCard({ data }) {
  const [product, setProduct] = React.useState(null);
  React.useEffect(() => {
    setProduct[data];
  }, product);
  const classes = useStyles();
  console.log(data);
  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);

  const render = () => {
    if (data === null) {
      return <p>NOTHING TO SHOW</p>;
    } else {
      return (
        <TableContainer component={Paper}>
          <Table
            className={matches ? classes.table : classes.table2}
            size="medium"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>PRODUCT</TableCell>
                <TableCell></TableCell>
                <TableCell>PRICE(Rs)</TableCell>
                <TableCell>DISCOUNT(%)</TableCell>
                <TableCell>TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.title}
                </TableCell>
                <TableCell>
                  <Avatar
                    variant="square"
                    className={matches ? classes.square : classes.square2}
                    src={data.image.url}
                  >
                    N
                  </Avatar>
                </TableCell>
                <TableCell>{data.price}</TableCell>
                <TableCell>{data.discount}</TableCell>
                <TableCell>
                  {Math.floor(data.price * (1 - data.discount / 100))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  };
  return <div>{render()}</div>;
}
