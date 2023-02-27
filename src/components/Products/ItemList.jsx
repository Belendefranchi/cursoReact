import React from 'react'
import { useLocation } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ products, category, carts, getCartList, updateCartQuantity }) => {

  const allProducts = useLocation().pathname.split("/")[3];
  console.log(allProducts)

  if (allProducts == "todos") {
    const sortedProducts = products.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
        return 0;
    });
    return (
      <div className='d-flex justify-content-center flex-wrap p-4'>
            {sortedProducts.map((product) => (
              <Item
                key={product.id}
                product={product}
                carts={carts}
                getCartList={getCartList}
                updateCartQuantity={updateCartQuantity}
              />
            ))};
      </div>
    )
  }else{
    return (
      <div className='d-flex justify-content-center flex-wrap p-4'>
        {products.filter((product) => product.category === category).map((product) => {
          return (
            <Item
              key={product.id}
              product={product}
              carts={carts}
              getCartList={getCartList}
              updateCartQuantity={updateCartQuantity}
            />
          );
        })}
      </div>
    )}
}

export default ItemList
