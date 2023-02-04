import React from 'react'
import styles from './Item.module.css'

const Item = ( { product } ) => {
    return (
        <div className={styles.container}>
            <h4>{product.title}</h4>
            <p>$ {product.price}</p>
        </div>
    )
}

export default Item
