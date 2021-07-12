import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { API_URL } from 'config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/dist/client/router';
import { Router } from '@material-ui/icons';
import ImageIcon from '@material-ui/icons/Image';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import UploadImage from './UploadImage';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '100px'
    },
    field1: {
        marginTop: 10,
        marginBottom: 20,
        display: 'block',
    },
    field2: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    formControl: {
        display: 'flex',
        minWidth: 120,
    },
    extra: {
        marginTop: '20px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

const AddProduct = (props) => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [price, setPrice] = useState(100);
    const [discount, setDiscount] = useState(10);
    const [image, setImage] = React.useState(null);
    const [tag, setTag] = useState(1);
    const [titleError, setTitleError] = useState(false);
    const [postError, setPostError] = useState(false);
    const [discountError, setDiscountError] = useState(false);
    const classes = useStyles();
    const router = useRouter();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getValPostTitle = (e) => {
        setPostTitle(e.target.value);
    }
    const getValPostBody = (e) => {
        setPostBody(e.target.value);
    }
    const getPrice = (e) => {
        setPrice(e.target.value);
    }
    const getDiscount = (e) => {
        console.log('discount: ', e.target.value)
        setDiscount(e.target.value);
    }
    const getTag = (e) => {
        setTag(e.target.value);
    }
    const tagItems = [
        'keychain', 'coaster', 'character', 'accesory', 'bracelet'
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('discount: ', discount)
        setPostError(false);
        setTitleError(false);
        setDiscountError(false);
        if (postTitle === '')
            setTitleError(true)
        if (postBody === '')
            setPostError(true)
        if (discount < 0)
            setDiscountError(true)
        if (postTitle && postBody && discountError === false) {
            setPostTitle('');
            setPostBody('');
            setDiscount(10);
            var tagItem = tagItems[tag - 1]
            const values = {
                title: postTitle,
                description: postBody,
                tags: tagItem,
                discount: discount,
                price: price,
            };
            console.log(values);
            const res = await fetch(`${API_URL}/product-lists`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            if (!res.ok) {
                toast.error('Something went wrong');
            }
            else {
                const data = await res.json();
                router.push('/');
            }
        }
    }


    const renderTitle = () => {
        return (
            <TextField
                onChange={getValPostTitle}
                value={postTitle}
                label="Title"
                variant="outlined"
                color="primary"
                fullWidth
                required
                className={classes.field1}
                multiline
                rows={2}
                error={titleError}
            />
        )
    }

    const renderDescription = () => {
        return (
            <TextField
                onChange={getValPostBody}
                value={postBody}
                label="Description"
                variant="outlined"
                color="primary"
                fullWidth
                required
                className={classes.field2}
                multiline
                rows={5}
                error={postError}
            />
        )
    }
    const priceRender = () => {
        return (
            <TextField
                id="date"
                label="Price"
                type="number"
                value={price}
                required
                fullWidth
                variant="outlined"
                onChange={getPrice}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    }
    const discountRender = () => {
        return (
            <TextField
                id="date"
                label="Discount%"
                type="number"
                required
                onChange={getDiscount}
                value={discount}
                fullWidth
                error={discountError}
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    }
    const tagRender = () => {
        return (
            <FormControl
                variant="outlined"
                className={classes.formControl}
            >
                <InputLabel >Tag</InputLabel>
                <Select
                    value={tag}
                    onChange={getTag}
                >
                    <MenuItem value={1}>keychain</MenuItem>
                    <MenuItem value={2}>coaster</MenuItem>
                    <MenuItem value={3}>character</MenuItem>
                    <MenuItem value={4}>accesory</MenuItem>
                    <MenuItem value={5}>bracelet</MenuItem>
                </Select>
            </FormControl>
        )
    }

    const imageModal = () => {
        const imageUploaded = (data) => {
            setImage(data);
            console.log('image I got: ', image);
            console.log('UPLOADED');
        }
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
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <UploadImage imageUploaded={imageUploaded} />
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
    return (
        <div>
            <Container className={classes.root} maxWidth="md">
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        {renderTitle()}
                        {renderDescription()}
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            {priceRender()}
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            {discountRender()}
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            {tagRender()}
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            <Button
                                type="button"
                                color="secondary"
                                variant="contained"
                                endIcon={<ImageIcon />}
                                onClick={handleOpen}
                                style={{ marginTop: '20px' }}
                            >
                                Add Image
                            </Button>
                        </Grid>
                    </Grid>
                    {imageModal()}
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        endIcon={<ArrowRightIcon />}
                        style={{ marginTop: '20px' }}
                    >
                        Submit Post
                    </Button>
                </form>
            </Container>
        </div >
    )
}

export default AddProduct;

