import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { API_URL } from 'config';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    button: {
        margin: '20px'
    }
}));

export default function UploadImage(props) {
    console.log(props)
    const classes = useStyles();

    const [image, setImage] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const formData = new FormData()
        // formData.append('image', image)
        // const res = await fetch(`${API_URL}/product-lists`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: formData
        // });
        // // const newImageId = res.data.id;
        // console.log(newImageId)
        // if (res.ok) {
        //     imageUploaded();
        // }
        console.log('called');
        props.imageUploaded(image);
    }
    const handleFileChange = (e) => {
        console.log('called dasdas');
        setImage(e.target.files[0]);
    }
    return (
        <div className={classes.root}>
            <form>
                <input
                    // accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained"
                        color="secondary"
                        component="span"
                        type="button"
                        className={classes.button}
                        endIcon={<PermMediaIcon />}>
                        Upload Image
                    </Button>
                </label>
                <Button
                    type="button"
                    onClick={handleSubmit}
                    color="primary"
                    className={classes.button}
                    variant="contained"
                >
                    UPLOAD
                </Button>
            </form>
        </div>
    );
}