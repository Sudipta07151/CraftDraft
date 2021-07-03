import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            // margin: theme.spacing(1),
            width: '100%',
            postion: 'absolute',
            top: 400,
            paddingRight: '20px',
            paddingLeft: '20px'
        },
    },
    margin: {
        margin: theme.spacing(1),
        postion: 'absolute',
        top: 400,
    }
}));

const AddReview = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        {
            setValue(event.target.value);
        }
    };

    const resetBox = (e) => {
        setValue('');
        e.target.value = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            console.log(value);
            props.addComment(props.postID, value)
            setValue('');
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                id="standard-multiline-flexible"
                label="Add Review"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
                required
            />
            <Button className={classes.margin} variant="outlined" type="submit" color="primary">ADD</Button>
            <Button className={classes.margin} variant="outlined" color='secondary'
                onClick={resetBox}
            >
                CANCEL</Button>
        </form>
    );
}

export default AddReview;
