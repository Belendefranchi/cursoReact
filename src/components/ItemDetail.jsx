import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../db/firebase-config'
import styles from './itemDetail.module.css'

const ItemDetail = () => {

    /* const { title } = useParams();
    const category = useLocation().pathname.split("/")[1];
    const items = data[category];
    const item = items.find((item) => item.title === title); */
    
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProduct = async (id) => {
        const productDocRef = doc(db, "products", id);
        const productDoc = await getDoc(productDocRef);
        if (productDoc.exists()) {
            setProduct(productDoc.data());
        } else {
            return null;
        }
    };
    
    useEffect(() => {
        getProduct(id);
    }, []);

    return (
        <div className={styles.container}>
            <img className='img-fluid' src={product.image}></img>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <h5>$ {product.price}</h5>
        </div>
    )
}

export default ItemDetail
