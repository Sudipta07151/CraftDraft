import React from 'react'
import ProductCard from './ProductCard';

export default function CardList(props) {
    // console.log(props)
    const render = () => {
        return (props.products.map(el => {
            return (
                <ProductCard data={el} key={el.id} />
            )
        })
        )
    }
    return (
        <React.Fragment>
            {props.products.length === 0 ? 'Nothing To Show' : render()}
            {/* {<ProductCard data={props.products} />} */}
        </React.Fragment>
    )
}
