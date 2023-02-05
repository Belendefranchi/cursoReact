import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form/Form'
import Item from './Item'
import styles from './Grid.module.css'


const Grid = ( { products, setProducts, deleteProduct } ) => {
    return (
        <>
            <Form setProducts={setProducts} />
            {products.map((product) => {
            return (
                <div className={styles.container}>
                    <Link to={`${product.id}`} key={product.id}>
                        <Item key={product.id} product={product} />
                    </Link>
                    <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
                </div>
            );
            })}
        </>
    )
}

export default Grid
