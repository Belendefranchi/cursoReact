import './App.css'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import { useState } from 'react'
import { db } from "../db/firebase-config";
import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    console.log(docs);
    setProducts(docs);
  };

  useEffect(() => {
      getProducts();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/cursoReact" element={<Carousel />} />
      </Routes>
      {products.map((product) => {
        return (
          <>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </>
        )
      })}
      <Footer />
    </div>
  )
}

export default App
