import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Review from './Review';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '30px',
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        top: 500
    },
    inline: {
        display: 'inline',
    },
}));

const ReviewList = (props) => {
    console.log('from comment list:', props.commentList)
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                // props.commentList.map(data => {
                //     return (
                //         <Review data={data} />
                //     )
                // })
                // <Review data={data} />
            }
        </List>
    );
}

export default ReviewList;