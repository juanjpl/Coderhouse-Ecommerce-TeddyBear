import { useState, useEffect } from "react";
import CardUser from "./components/CardUser.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroHome from "./components/HeroHome/HeroHome.jsx";
import BannerOne from "./components/BannerOne/BannerOne.jsx";
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

  /*
    <>
      <h1>Teddy Bears Shop</h1>
      <div className="grid">
      {bears.map((bear)=>{
        return(
          <div key={bear.id}>
            <CardUser data={bear}/>
          </div>
        )
      })}
      </div>
     
    </>
  */

  return (
    <>
    <Navbar/>
  <HeroHome/>
    <BannerOne/>
     
    </>
  );
};

export default App;
