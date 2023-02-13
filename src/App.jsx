import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'
import CartListContainer from './components/CartListContainer'

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
    return <h1>Cargando...</h1>
  }

  console.log(products);
  console.log(carts);

  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<Carousel />} 
          />
          <Route 
            path="/productos/baldes"
            element={<ItemListContainer
              products={products}
              category={"baldes"} />} 
          />
          <Route 
            path="/productos/baldes/:id" 
            element={<ItemDetail />}
          />
          <Route
            path="/productos/postres"
            element={<ItemListContainer
              products={products}
              category={"postres"} />} 
          />
          <Route 
            path="/productos/postres/:id" 
            element={<ItemDetail />}
          />
          <Route 
            path="/productos/impulsivos"
            element={<ItemListContainer
              products={products}
              category={"impulsivos"} />} 
          />
          <Route 
            path="/productos/impulsivos/:id" 
            element={<ItemDetail />}
          />
          <Route 
            path="/productos/todos"
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
            path="/carrito"
            element={<CartListContainer 
              carts={carts}
              setCarts={setCarts} />}
          />
          <Route path='*' element={<h4>404 Oops...</h4>} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
