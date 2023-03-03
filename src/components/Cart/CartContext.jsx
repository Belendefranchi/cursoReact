import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { createContext, useState } from 'react';
import { db } from '../../../db/firebase-config';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  // Define el estado para almacenar los elementos del carrito
  const [carts, setCarts] = useState([]);

  // Define el estado para almacenar la cantidad total del carrito
  const [cartQuantity, setCartQuantity] = useState(0);

  const cartsCollectionRef = collection(db, "carts");
  const getCartList = async () => {
      const querySnapshot = await getDocs(cartsCollectionRef);
      const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
      setCarts(docs);
      updateCartQuantity(docs);
      console.log(carts);
  };

  const [smShow, setSmShow] = useState(false);

  const addModal = () => {
      setSmShow(true);
  }

  // Obtiene el valor del select
  const getSelectValue = (id) =>{
    const qtys = document.querySelectorAll(".qty");
    for (const qty of qtys){
        if(qty.id === id){
            return qty.value;
        }
    }
    return false;
}

  // Agrega un producto al carrito
  const addToCart = async (product, carts) => {
    const itemIndex = carts.find((cart) => cart.product === product.id);

    if (itemIndex) {
        console.log("El producto ya existe en el carrito");

        console.log("product.id: " + product.id)
        console.log("product.title: " + product.title)
        console.log("product.price: " + product.price)
        console.log("product.quantity: " + getSelectValue(product.id))
    
        // Buscar el documento correspondiente al producto
        const querySnapshot = await getDocs(
            query(collection(db, "carts"), where("product", "==", product.id))
        );
    
        querySnapshot.forEach((cart) => {
            // Actualizar la cantidad en el documento correspondiente
            const cartsDocRef = doc(db, "carts", cart.id);
            const updateItem = {
            quantity: parseInt(cart.data().quantity) + parseInt(getSelectValue(product.id)),
            };
            updateDoc(cartsDocRef, updateItem);
        });
    } else {
        console.log("No existe el producto en el carrito");

        const cartsCollectionRef = collection(db, "carts");
        const addItem = {
            product: product.id,
            title: product.title,
            price: product.price,
            quantity: getSelectValue(product.id),
        };
        await addDoc(cartsCollectionRef, addItem);
        console.log("product.id: " + product.id)
        console.log("product.title: " + product.title)
        console.log("product.price: " + product.price)
        console.log("product.quantity: " + getSelectValue(product.id))
    }
    addModal();
    getCartList();
    updateCartQuantity(carts);
};

  // Cuenta la cantidad de productos en el carrito
  const itemsQuantity = carts.reduce((total, cart) => {
    return total + parseInt(cart.quantity)
  }, 0);
  
  // Actualiza la cantidad del carrito cada vez que se agrega o se elimina un elemento del carrito
  const updateCartQuantity = (itemsQuantity) => {
    setCartQuantity(itemsQuantity);
    console.log(cartQuantity);
  };
  
  // Cuenta el total de la compra
  const cartTotal = carts.reduce((total, cart) => {
    return total + parseInt(cart.quantity)*parseFloat(cart.price)
  }, 0).toFixed(2);

  // Elimina un producto del carrito
  const removeItem = async (product) => {
    const productDocRef = doc(db, "carts", product)
    await deleteDoc(productDocRef)
    getCartList()
}
  // Vacía el carrito
  const emptyCart = () => {
    carts.forEach((cart) => {
      const productDocRef = doc(db, "carts", cart.id)
      deleteDoc(productDocRef)
    })
    getCartList()
  }

  return (
    <CartContext.Provider value={{ carts, setCarts, cartQuantity, setCartQuantity, updateCartQuantity, addToCart, getCartList, cartTotal, removeItem, emptyCart,  }}>
      {children}
    </CartContext.Provider>
  );

}