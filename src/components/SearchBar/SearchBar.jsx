import "./styles.css";
import { useState, useEffect } from "react";

const SearchBar = ({ title ,value , onChange, onSubmit }) => {


  return (
    <div className="search-bar">
      <div className="contenedor-bar">
        <h2>{title}</h2>
        <div className="search-input">
          <input
            id="input-search"
            className="input-search"
            type="text"
            placeholder="search"
            onChange={onChange}
            value={value}
          />
          <i type='submit' className="fa-solid fa-magnifying-glass" onClick={onSubmit}></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
