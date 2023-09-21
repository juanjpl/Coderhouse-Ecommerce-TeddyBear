import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage/HomePage.jsx';
import AboutPage  from './views/AboutPage/AboutPage.jsx';
import CartPage from './views/CartPage/CartPage.jsx';
import CategoryPage from './views/CategoryPage/CategoryPage.jsx';
import ContactPage from './views/ContactPage/ContactPage.jsx';
import ItemPage from './views/ItemPage/ItemPage.jsx';
import ShopPage from './views/ShopPage/ShopPage.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from './components/Footer/Footer.jsx';
import "./App.css";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig.js";

const App = () => {
  const [bears,setBears] = useState([]);
  useEffect(() => {
   
    const getBears = async () => {
      const q = query(collection(db, "teddy-bears"));
      const docs=[];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        docs.push({...doc.data(),id: doc.id})
      });

      setBears(docs);
    };

    getBears();
    
  }, []);

 

  return (
    <Router>

    
    <div className="container-app">
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage data={bears} />} />
      <Route path='/home' element={<HomePage data={bears} />} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/categories' element={<CategoryPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/item/:id' element={<ItemPage/>} />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/*' element={<HomePage data={bears} />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
};

export default App;
