import React, { useEffect } from 'react'
import styles from './itemDetail.module.css'

const ItemDetail = ({ getProduct, product, id }) => {
    
    useEffect(() => {
        getProduct(id);
    }, []);
    
    return (
        <div className={styles.container}>
            <img className='img-fluid' src={product.image}></img>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h5>$ {product.price}</h5>
            <a href="javascript:history.go(-1)">
                <button className='m-1 btn btn-success'>Volver</button>
            </a>
        </div>
    )
}

export default ItemDetail
