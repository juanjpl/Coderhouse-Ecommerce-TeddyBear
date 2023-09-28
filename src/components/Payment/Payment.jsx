import "./styles.css";
import SuperiorBar from "../SuperiorBar/SuperiorBar";
import SuccessPurchase from "../SuccessPurchase/SuccessPurchase.jsx";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

/* <p>{errors.name && touched.name && errors.name}</p> */

const Payment = () => {
  const [purchaseID, setPurchaseID] = useState("");

  const yupSchema = yup
    .object({
      name: yup
        .string()
        .min(4, "Please enter min 4 characters!")
        .max(10, "Please enter mmax 10 characters!")
        .required(),
      lastName: yup
        .string()
        .min(4, "Please enter min 4 characters!")
        .max(10, "Please enter mmax 10 characters!")
        .required(),
      email: yup.string().email().required(),
    })
    .required();

  const sumitHandler = async (values, { resetForm }) => {
    console.log(values);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    resetForm();
  };

  return (
    <div className="container-payment">
      <SuperiorBar title={"Payment"} />
      {purchaseID == "" ? (
        <Formik
          initialValues={{ name: "", lastName: "", email: "" }}
          onSubmit={(values, { resetForm }) =>
            sumitHandler(values, { resetForm })
          }
          validationSchema={yupSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            dirty,
            resetForm,
          }) => (
            <form className="style-form" onSubmit={handleSubmit}>
              <div className="container-input">
                <label htmlFor="name" className="label">
                  Name:
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
                <p className="comment">min 4 - max 10 characters</p>
              </div>

              <div className="container-input">
                <label htmlFor="lastName" className="label">
                  Last Name:
                </label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  required
                />
                <p className="comment">min 4 - max 10 characters</p>
              </div>

              <div className="container-input">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
                <p className="comment">Enter an email with its format</p>
              </div>

              <div className="container-input">
                <button
                  type="submit"
                  className="button-submit"
                  disabled={!(isValid && dirty)}
                >
                  BUY
                </button>
              </div>
            </form>
          )}
        </Formik>
      ) : (
        <SuccessPurchase order={purchaseID} />
      )}
    </div>
  );
};

export default Payment;
