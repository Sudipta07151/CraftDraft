import { mdiConsoleNetworkOutline } from '@mdi/js'
import React from 'react'
import ProductEditCard from './ProductEditCard'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        top: '120px'
    },
    media: {
        height: 200,
    },
});


export default function ProductEditCardList({ data }) {
    console.log(data)
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <div className={classes.root}>
                {
                    data.map((element) => {
                        return (
                            <ProductEditCard data={element} key={element.id} />
                        )
                    })
                }
            </div>
        </Container>
    )
}
