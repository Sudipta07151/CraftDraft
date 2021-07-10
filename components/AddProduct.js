import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
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
        // margin: theme.spacing(1),
        minWidth: 120,
    },
    extra: {
        marginTop: '20px'
    }
})

const AddProduct = (props) => {
    console.log(props)
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [postError, setPostError] = useState(false);
    const classes = useStyles();

    const getValPostTitle = (e) => {
        setPostTitle(e.target.value);
    }
    const getValPostBody = (e) => {
        setPostBody(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPostError(false);
        setTitleError(false);
        if (postTitle === '')
            setTitleError(true)
        if (postBody === '')
            setPostError(true)
        if (postTitle && postBody) {
            setPostTitle('');
            setPostBody('');
            const post = { postTitle, postBody, state };
            // props.AddBlogPost(post)
            console.log(post);
        }

    }
    const [state, setState] = React.useState({
        keychain: false, coaster: false, character: false, accesory: false, bracelet: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    // const { keychain, coaster, character, accesory, bracelet } = state;

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
                required
                fullWidth
                variant="outlined"
                defaultValue={100}
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
                fullWidth
                variant="outlined"
                defaultValue={10}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    }
    const tagRender = () => {
        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Tag</InputLabel>
                <Select
                    native
                    fullWidth
                    value={state.bracelet}
                    onChange={handleChange}
                    inputProps={{
                        id: 'filled-age-native-simple',
                    }}
                >
                    <option value={true}>keychain</option>
                    <option value={true}>coaster</option>
                    <option value={true}>character</option>
                    <option value={true}>accesory</option>
                    <option value={true}>bracelet</option>
                </Select>
            </FormControl>
        )
    }
    return (
        <div>
            <Container className={classes.root} maxWidth="md">
                <form onSubmit={handleSubmit}>
                    {renderTitle()}
                    {renderDescription()}
                    <Grid container>
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            {priceRender()}
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            {discountRender()}
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ marginTop: '20px' }}>
                            {tagRender()}
                        </Grid>
                    </Grid>
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

