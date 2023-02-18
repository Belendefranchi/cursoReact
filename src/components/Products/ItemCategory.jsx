import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { doc, getDoc, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../../db/firebase-config'
import styles from './itemCategory.module.css'

const ItemCategory = () => {

    /* const { title } = useParams();
    const category = useLocation().pathname.split("/")[1];
    const items = data[category];
    const item = items.find((item) => item.title === title); */
    
    const getProduct = async (category) => {
    
        const category = await db.collection("products").where("category", "==", "baldes").get();
        category.forEach((querySnapshot) => console.log( querySnapshot.data().category ));
    };
    
/*     const { category } = useParams();
    const [product, setProduct] = useState({});
  
    const getProduct = async (category) => {
        const productDocRef = doc(db, "products", category);
        const productDoc = await getDoc(productDocRef);
        if (productDoc.exists()) {
            setProduct(productDoc.data());
        } else {
            return null;
        }
    };*/
    
    useEffect(() => {
        getProduct(category);
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

export default ItemCategory
