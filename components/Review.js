import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        mixWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function Review(props) {
    console.log('FROM COMMENT :', props)
    const classes = useStyles();
    if (props.data) {
        var created_date = new Date(props.data.date);
        var date = created_date.toDateString();
        var time = created_date.toTimeString();
    }
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={props.data.uname[0]} src={props.data.pic} />
            </ListItemAvatar>
            <ListItemText
                //primary="Brunch this weekend?"
                primary={props.data.text}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {/* Ali Connors */}
                            {props.data.uname}
                        </Typography>
                        {/* {" — I'll be in your neighborhood doing errands this…"} */}
                        {date}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}