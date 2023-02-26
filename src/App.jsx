import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import ItemListContainer from './components/Products/ItemListContainer'
import ItemDetailContainer from './components/Products/ItemDetailContainer'
import CartListContainer from './components/Cart/CartListContainer'
import Footer from './components/Footer'

function App() {

  // Define el estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  
  // Obtiene los productos de la base de datos
  const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
    setProducts(docs);
    setLoading(false);
  };

  // Define el estado para almacenar la cantidad del carrito
  const [cartQuantity, setCartQuantity] = useState(0);

  // Actualiza la cantidad del carrito cada vez que se agrega o se elimina un elemento del carrito
  const updateCartQuantity = (carts) => {
    const itemsQuantity = carts.reduce((total, cart) => {
      return total + parseInt(cart.quantity)
    }, 0);
    setCartQuantity(itemsQuantity);
    console.log(cartQuantity);
  };

  // Define el estado para almacenar los productos del carrito
  const [carts, setCarts] = useState([]);
  const cartsCollectionRef = collection(db, "carts");
  
  const getCartList = async () => {
      const querySnapshot = await getDocs(cartsCollectionRef);
      const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
      setCarts(docs);
      updateCartQuantity(docs);
      console.log(carts);
  };
  
  useEffect(() => {
    getProducts();
    getCartList();
  }, []);


  const [loading, setLoading] = useState(true);
  if (loading) {
    return <h2 className="m-4">Cargando...</h2>
  };

  return (
      <div className="App">
        <NavBar cartQuantity={cartQuantity} />
        <Routes>
          <Route 
            path="/cursoReact/" 
            element={<Carousel />} 
          />
          <Route 
            path="/cursoReact/productos/:category"
            element={<ItemListContainer
              products={products}
              carts={carts}
              getCartList={getCartList}
              updateCartQuantity={updateCartQuantity}
            />} 
          />
          <Route 
            path="/cursoReact/productos/:category/:id"
            element={<ItemDetailContainer />}
          />
{/*           <Route 
            path="/cursoReact/productos/baldes/:id" 
            element={<ItemDetail />}
          />
          <Route 
            path="/cursoReact/productos/postres/:id" 
            element={<ItemDetail />}
          />
          <Route 
            path="/cursoReact/productos/impulsivos/:id" 
            element={<ItemDetail />}
          /> */}
          <Route 
            path="/cursoReact/carrito"
            element={<CartListContainer
              carts={carts}
              setCarts={setCarts}
              getCartList={getCartList}
              /* emptyCart={emptyCart} */ />}
          />
          <Route path='*' element={<h4 className="m-4">404 Oops...</h4>} />
        </Routes>
{/*         <Footer /> */}
      </div>
  )
}

export default App
