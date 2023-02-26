import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../db/firebase-config'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  
  const { category } = useParams();
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

  return (
    <div>
      <ItemDetail category={category} getProduct={getProduct} product={product} id={id} />
    </div>
  )
}

export default ItemDetailContainer
