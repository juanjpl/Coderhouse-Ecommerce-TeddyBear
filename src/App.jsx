import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage/HomePage.jsx';
import AboutPage  from './views/AboutPage/AboutPage.jsx';
import CartPage from './views/CartPage/CartPage.jsx';
import CategoryPage from './views/CategoryPage/CategoryPage.jsx';
import ContactPage from './views/ContactPage/ContactPage.jsx';
import DetailPage from './views/DetailPage/DetailPage.jsx';
import ShopPage from './views/ShopPage/ShopPage.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import "./App.css";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig.js";

const App = () => {
  const [bears,setBears] = useState([]);
  const [cart,setCart] = useState(0);



function onAdd(productos){

  setCart(cart + productos);
  console.log(`se agregaron ${productos} productos al carrito`)
  
}




  useEffect(() => {
   
    const getBears = async () => {
      const q = query(collection(db, "teddy-bears"));
      const docs=[];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());

        docs.push({...doc.data(),id: doc.id})
      });

      setBears(docs);
    };

    getBears();
    
  }, []);

 

  return (
    <Router>

    
    <div className="container-app">
    <Navbar data={cart}/>
    <Routes>
      <Route path='/' element={<HomePage data={bears} />} />
      <Route path='/home' element={<HomePage data={bears} />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/category/:category' element={<CategoryPage data={bears}/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/item/:id' element={<DetailPage data={bears} onAdd={onAdd}/>} />
      <Route path='/shop' element={<ShopPage data={bears}/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/*' element={<ErrorPage/>} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
};

export default App;
