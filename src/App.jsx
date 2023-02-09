import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../db/firebase-config'
import NavBar from './components/Navbar/NavBar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'
import ModifyProductsList from './components/ModifyProductsList'

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
  
/*   const postresCollectionRef = collection(db, "postres");
  const getPostres = async () => {
    const querySnapshot = await getDocs(postresCollectionRef);
    const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})); 
    setProducts(docs);
    setLoading(false);
  } */

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

        <Route 
          path="/productos/baldes"
          element={<ItemListContainer products={products} category={"baldes"} />} 
        />

        <Route path="/productos/baldes/:id" 
          element={<ItemDetail />}
        />

        <Route 
          path="/productos/postres"
          element={<ItemListContainer products={products} category={"postres"} />} 
        />

        <Route path="/productos/postres/:id" 
          element={<ItemDetail />}
        />

        <Route 
          path="/productos/impulsivos"
          element={<ItemListContainer products={products} category={"impulsivos"} />} 
        />

        <Route path="/productos/impulsivos/:id" 
          element={<ItemDetail />}
        />

        <Route path="/modificar" 
          element={<ModifyProductsList 
          products={products} 
          setProducts={setProducts} 
          deleteProduct={deleteProduct} /> } 
        />

        <Route path='*' element={<h4>404 Oops...</h4>} />
      
      </Routes>



      {/* <Grid products={products} /> */}
      <Footer />
    </div>
  )
}

export default App
