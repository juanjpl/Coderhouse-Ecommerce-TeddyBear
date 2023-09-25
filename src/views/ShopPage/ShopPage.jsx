import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";

const ShopPage = ({ data }) => {
  const [value, setValue] = useState("");
  const [dataFiltered , setDataFiltered] = useState(data);

  const onChange = (e) => {
    //console.log(e.target.value);
    setValue(e.target.value);
    console.log(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Imprime value", value);
    setValue("");
    const filtered = data.filter((bear) => bear.name.toLowerCase().includes(value.toLowerCase()));
   setDataFiltered(filtered)

  
  };




  return (
    <div className="container-shop">
      <SearchBar
        title="Shop"
        onChange={onChange}
        onSubmit={onSubmit}
        value={value}
      />
      <ItemListContainer data={dataFiltered} />
    </div>
  );
};

export default ShopPage;
