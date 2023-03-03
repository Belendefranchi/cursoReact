import './App.css'
import { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
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
  const { getCartList } = useContext(CartContext);
  const { cartQuantity } = useContext(CartContext);
  
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
            />} 
          />
          <Route 
            path="/cursoReact/productos/:category/:id"
            element={<ItemDetailContainer />}
          />
          <Route 
            path="/cursoReact/carrito"
            element={<CartListContainer
              carts={carts} />}
          />
          <Route
            path="/cursoReact/purchase"
            element={<PurchaseOrder
              carts={carts} />}
          />
          <Route path='*' element={<h4 className="m-4">404 Oops...</h4>} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
