import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemListContainer from './components/Products/ItemListContainer'
import ItemDetail from './components/Products/ItemDetail'
import CartListContainer from './components/Cart/CartListContainer'

function App() {

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  
  const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
    setProducts(docs);
    setLoading(false);
  };

  const [carts, setCarts] = useState([]);
  const cartsCollectionRef = collection(db, "carts");
  
  const getCartList = async () => {
      const querySnapshot = await getDocs(cartsCollectionRef);
      const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
      setCarts(docs);
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
        <NavBar />
        <Routes>
          <Route 
            path="/cursoReact/" 
            element={<Carousel />} 
          />
          <Route 
            path="/cursoReact/productos/baldes"
            element={<ItemListContainer
              products={products}
              carts={carts}
              category={"baldes"} />} 
          />
          <Route 
            path="/cursoReact/productos/baldes/:id" 
            element={<ItemDetail />}
          />
          <Route
            path="/cursoReact/productos/postres"
            element={<ItemListContainer
              products={products}
              carts={carts}
              category={"postres"} />} 
          />
          <Route 
            path="/cursoReact/productos/postres/:id" 
            element={<ItemDetail />}
          />
          <Route 
            path="/cursoReact/productos/impulsivos"
            element={<ItemListContainer
              products={products}
              carts={carts}
              category={"impulsivos"} />} 
          />
          <Route 
            path="/cursoReact/productos/impulsivos/:id" 
            element={<ItemDetail />}
          />
          <Route 
            path="/cursoReact/productos/todos"
            element={<>
              <ItemListContainer
                products={products}
                category={"baldes"} />
              <ItemListContainer
                products={products}
                category={"postres"} />
              <ItemListContainer
                products={products}
                category={"impulsivos"} />
            </>} 
          />
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
        <Footer />
      </div>
  )
}

export default App
