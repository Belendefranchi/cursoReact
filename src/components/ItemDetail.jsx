import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ItemDetail = ({ data }) => {
    const {title} = useParams();
    const category = useLocation().pathname.split("/")[1];
    const items = data[category];
    const item = items.find((item) => item.title === title);
    console.log(item);
    return (
        <>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </>
    )
}

export default ItemDetail
