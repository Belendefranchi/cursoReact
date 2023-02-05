import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Grid from './components/Grid'
import ItemDetail2 from './components/itemDetail2'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollectionRef);
    //const docs = querySnapshot.docs.map((doc) => doc.data());
    //agrego la propiedad id con map
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
    setProducts(docs);
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    const productDocRef = doc(db, "products", id);
    await deleteDoc(productDocRef);
    getProducts();
  }

  useEffect(() => {
      getProducts();
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>
  }

  console.log(products);
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/cursoReact" element={<Carousel />} />
        <Route path="/cursoReact/productos/baldes" element={<ItemListContainer category="baldes" />} />
        <Route path="/cursoReact/products" element={<Grid products={products} setProducts={setProducts} deleteProduct={deleteProduct}/>} />
        <Route path="/cursoReact/products/:id" element={<ItemDetail2 />} />
        <Route path='*' element={<h4>404</h4>} />
      </Routes>
      {/* <Grid products={products} /> */}
      <Footer />
    </div>
  )
}

export default App
