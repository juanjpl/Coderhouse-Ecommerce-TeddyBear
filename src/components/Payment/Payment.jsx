import "./styles.css";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import SuperiorBar from "../SuperiorBar/SuperiorBar";
import {Formik} from 'formik';


const Payment = ({ cartBears }) => {
  return (
    <div className="container-payment">
      <SuperiorBar title={'Payment'} />
      <form className="style-form" action="">
        <div className="container-input">
        <label htmlFor="name" className="label"> Name: </label>
          <input
          className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="container-input">
          <label htmlFor="lastName" className="label">Last Name: </label>
          <input
           className="input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>

        <div className="container-input">
          <label htmlFor="email" className="label">Email: </label>
          <input
           className="input"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
          />
        </div>

        <div className="container-input">
          <button type="submit" className="button-submit">BUY</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
