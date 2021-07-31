import React from "react";
import { API_URL } from "config";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/dist/client/router";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import UploadImage from "./UploadImage";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "150px",
    marginTop: "20px",
    border: "2px solid black",
  },
  button: {
    margin: "2px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: "141px",
    minHeight: "150px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  formControl: {
    display: "flex",
    minWidth: 120,
  },
  extra: {
    marginTop: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  upper: {
    borderBottom: "2px solid black",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ProductEditCard({ data }) {
  var productData = data;
  console.log(productData);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const handleDelete = async () => {
    console.log(productData.id);

    if (confirm("ARE YOU SURE")) {
      const res = await fetch(`${API_URL}/product-lists/${productData.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error("DELETE REQUEST FAILED");
      } else {
        router.push("/");
        toast.success("DELETED SUCCESSFULLY");
      }
    }
  };
  const imageModal = () => {
    // const router = useRouter();
    const path = router.pathname;
    const imageUploaded = async (data) => {
      console.log("image I got: ", data);
      const formData = new FormData();
      formData.append("files", data);
      formData.append("ref", "product-list");
      // formData.append('uid', productData.key);
      formData.append("refId", productData.id);
      formData.append("field", "image");

      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        toast.success("IMAGE UPLOADED");
        console.log("UPLOADED");
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      } else {
        toast.error("UPLOAD FAILED");
      }
    };

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2
                id="transition-modal-title"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                UPLOAD PRODUCT IMAGE
              </h2>
              <UploadImage imageUploaded={imageUploaded} />
            </div>
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Card className={classes.root}>
        <Grid container>
          <Grid item xs={8} className={classes.upper}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {data.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {data.description}
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              className={classes.cover}
              image={
                data.image
                  ? data.image.formats.thumbnail.url
                  : "https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              title="Live from space album cover"
            />
          </Grid>
          <Grid container>
            <div className={classes.controls}>
              <Grid item xs={4}>
                <Button
                  type="button"
                  color="secondary"
                  variant="contained"
                  endIcon={<ImageIcon />}
                  onClick={handleOpen}
                  className={classes.button}
                  style={{ marginTop: "20px" }}
                >
                  Add Image
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Link href={`/ product / editproduct`} passHref>
                  <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    endIcon={<EditIcon />}
                    // onClick={handleOpen}
                    className={classes.button}
                    style={{ marginTop: "20px" }}
                  >
                    Edit Details
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="button"
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  className={classes.button}
                  onClick={handleDelete}
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#d32f2f",
                    color: "white",
                  }}
                >
                  DELETE ITEM
                </Button>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Card>
      {imageModal()}
    </div>
  );
}
