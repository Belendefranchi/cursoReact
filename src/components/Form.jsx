import React from 'react'
import { useState } from 'react'
import { db } from '../../db/firebase-config'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const Form = ({ setProducts }) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputPrice, setInputPrice] = useState("");

    const createItem = async (e) => {
        e.preventDefault();
        const product = {
            title: inputTitle,
            price: inputPrice,
        };
        const productsCollectionRef = collection(db, "products");
        await addDoc(productsCollectionRef, product);
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setInputTitle("");
        setInputPrice("");
    };

    return (
        <div>
            <form onSubmit={createItem}>
                <input 
                    type="text" 
                    value={inputTitle}
                    placeholder="Titulo"
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <input 
                    type="number" 
                    value={inputPrice}
                    placeholder="Precio"
                    onChange={(e) => setInputPrice(e.target.value)}
                />
                <button type="submit">Agregar Item</button>
            </form>
        </div>
    );
};


export default Form;
