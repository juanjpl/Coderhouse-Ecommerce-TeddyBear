import "./styles.css";
import HeroHome from "../../components/HeroHome/HeroHome.jsx";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import BannerOne from "../../components/BannerOne/BannerOne.jsx";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const HomePage = () => {
  const { bears, setBears } = useContext(ItemsContext);

  useEffect(() => {
    const getBears = async () => {
      const q = query(collection(db, "teddy-bears"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setBears(docs);
    };
    getBears();
  }, []);

  return (
    <div className="container-home">
      <HeroHome />
      <BannerOne />
      <h2>Star Products</h2>
      <ItemListContainer data={bears} />
    </div>
  );
};

export default HomePage;
