import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemDetail from './components/ItemDetail'
import ModifyProductsList from './components/ModifyProductsList'
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
        <Route path="/" 
          element={<Carousel />} 
          />
        <Route path="/products" 
          element={<ItemListContainer 
          products={products} /> } 
          />
        <Route path="/products/:id" 
          element={<ItemDetail />}
          />
        <Route path="/modify" 
          element={<ModifyProductsList 
          products={products} 
          setProducts={setProducts} 
          deleteProduct={deleteProduct} /> } 
          />
        <Route path='*' element={<h4>404 Oops...</h4>} />

        <Route 
          path="/productos/baldes"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer products={products} category={"baldes"}/></div>} 
        />

{/*         <Route 
          path="/productos/postres"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={postres}/></div>} 
        />

        <Route 
          path="/productos/impulsivos"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={impulsivos}/></div>} 
        /> */}
      </Routes>



      {/* <Grid products={products} /> */}
      <Footer />
    </div>
  )
}

export default App
