import styles from "./styles.css";
import HeroHome from '../../components/HeroHome/HeroHome.jsx';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';
import BannerOne from '../../components/BannerOne/BannerOne.jsx';


const HomePage = ({data}) => {
    console.log(data)
  return (
    <div>
      <HeroHome />
      <BannerOne />
      <ItemListContainer data={data} />
    
    </div>
  );
};

export default HomePage;
