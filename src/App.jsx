import './App.css'
import { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import Spinner from 'react-bootstrap/Spinner';
import ItemListContainer from './components/Products/ItemListContainer'
import ItemDetailContainer from './components/Products/ItemDetailContainer'
import CartListContainer from './components/Cart/CartListContainer'
import Footer from './components/Footer'
import PurchaseOrder from './components/Cart/PurchaseOrder'
import { CartContext } from './components/Cart/CartContext'


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

  const { carts } = useContext(CartContext);
  const { setCarts } = useContext(CartContext);
  const { getCartList } = useContext(CartContext);
  const { cartQuantity } = useContext(CartContext);
  const { updateCartQuantity } = useContext(CartContext);
  const { emptyCart } = useContext(CartContext);


/*   // Define el estado para almacenar la cantidad del carrito
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

  const emptyCart = () => {
    carts.forEach((cart) => {
      const productDocRef = doc(db, "carts", cart.id)
      deleteDoc(productDocRef)
    })
    getCartList()
  } */
  
  useEffect(() => {
    getProducts();
    getCartList();
  }, []);


  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h2 className="m-4">Cargando...</h2>
      </>
    )
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
          <Route 
            path="/cursoReact/carrito"
            element={<CartListContainer
              carts={carts}
              setCarts={setCarts}
              getCartList={getCartList}
              emptyCart={emptyCart} />}
          />
          <Route
            path="/cursoReact/purchase"
            element={<PurchaseOrder
              carts={carts}
              cartQuantity={cartQuantity}
              emptyCart={emptyCart} />}
          />
          <Route path='*' element={<h4 className="m-4">404 Oops...</h4>} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
