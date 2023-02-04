import React from 'react'

const Item = ( { product } ) => {
    return (
        <>
            <h4>{product.title}</h4>
            <p>$ {product.price}</p>
        </>
    )
}

export default Item
