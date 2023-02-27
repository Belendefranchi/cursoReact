import React from 'react'
import { useParams } from 'react-router';
import ItemList from './ItemList';

function ItemListContainer({ products, carts, getCartList, updateCartQuantity }) {
  
  const { category } = useParams();

  return(
    <ItemList
      products={products}
      category={category}
      carts={carts}
      getCartList={getCartList}
      updateCartQuantity={updateCartQuantity}
    />
  )

};

export default ItemListContainer

