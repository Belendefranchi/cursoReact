import React from 'react'
import { useParams } from 'react-router';
import ItemList from './ItemList';

function ItemListContainer({ products, carts }) {
  
  const { category } = useParams();

  return(
    <ItemList
      products={products}
      category={category}
      carts={carts}
    />
  )

};

export default ItemListContainer

