import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../db/firebase-config'
import styles from './itemDetail2.module.css'

const itemDetail2 = () => {

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
        <h4>{product.title}</h4>
        <p>$ {product.price}</p>
    </div>
    )
}

export default itemDetail2
    