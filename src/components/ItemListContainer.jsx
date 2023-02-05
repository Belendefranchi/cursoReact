import React from 'react'
import ProductsCards from "./ProductsCards.jsx";

function ItemListContainer({ category }) {
  return category.map(({ id, title, price, description, category, image }) => (
    <ProductsCards
      /* id={id} */
      title={title}
      price={price}
      description={description}
      category={category}
      image={image}
    />
  ));
};

export default ItemListContainer

