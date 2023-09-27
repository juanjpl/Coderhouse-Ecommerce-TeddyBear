import   './styles.css';
import HeroHome from '../../components/HeroHome/HeroHome.jsx';
import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';
import BannerOne from '../../components/BannerOne/BannerOne.jsx';


const HomePage = () => {

  const {bears} = useContext(ItemsContext);
 
  return (
    <div className="container-home">
      <HeroHome />
      <BannerOne />
      <h2>Star Products</h2>
      <ItemListContainer  data={bears} />
    
    </div>
  );
};

export default HomePage;
