import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Item from './Item'

const Grid = ( { products, setProducts } ) => {
    return (
        <>
            <Form setProducts={setProducts} />
            {products.map((product) => {
            return (
                <Link to={`${product.id}`} key={product.id}>
                    <Item product={product} />
                </Link>
            );
            })}
        </>
    )
}

export default Grid
