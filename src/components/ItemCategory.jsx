import React from 'react'
import { useLocation } from 'react-router-dom'

const ItemCategory = ({ data }) => {
    const category = useLocation().pathname.split("/")[1];
    console.log(category);
/*     const items = data[category];
    const item = items.find((item) => item.category === category); */

    return (
        <>
        if (condition) {
            
        }
{/*         <div className='d-flex flex-wrap'><ItemListContainer /></div> */}
        { products.map((item)=>{
      return <ProductsCards
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
        />;
      })}
{/*             <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.score}</p> */}
        </>
    )
}

export default ItemCategory
