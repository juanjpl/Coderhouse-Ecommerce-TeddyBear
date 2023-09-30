import "./styles.css";
import SuperiorBar from "../../components/SuperiorBar/SuperiorBar";
import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ContactPage = () => {


  const yupSchema = yup
  .object({
    name: yup
      .string()
      .min(4, "Please enter min 4 characters!")
      .max(15, "Please enter mmax 10 characters!")
      .required(),
    lastName: yup
      .string()
      .min(4, "Please enter min 4 characters!")
      .max(15, "Please enter mmax 10 characters!")
      .required(),
    email: yup.string().email().required(),
    comment: yup
    .string()
    .min(10, "Please enter min 4 characters!")
    .max(240, "Please enter mmax 10 characters!")
    .required(),
  })
  .required();

const sumitHandler = async (values, { resetForm }) => {
   console.log(values);

  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "Message"), {
    values,
  });
  //console.log("Document written with ID: ", docRef.id);
  //setPurchaseID(docRef.id);
  resetForm();
};
  
  return (
    <div className="container-contact">
      <SuperiorBar title={"Contact"} />
     <div className="contact">
      <div className="greeting">
      <div className="option">
            <h2>WE’D LOVE TO HEAR FROM YOU!</h2>
            <div className="direction">
            <i className="fa-solid fa-location-dot"></i>
            <h3>Cabildo 2000, CABA, Argentina</h3>
            </div>
            <div className="direction">
            <i className="fa-solid fa-phone"></i>
            <h3>+111 22 33 444</h3>
            </div>
            <div className="direction">
            <i className="fa-solid fa-envelope"></i>
            <h3>contact@teddy-bear.com</h3>
            </div>
         
      
         
        </div>
      </div>
      <div className="form-contact">
      <Formik
          initialValues={{ name: "", lastName: "", email: "" ,comment:""}}
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
              <div className="container-name-last">
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
                <label htmlFor="comment" className="label">
                Comment or Message:
                </label>
                <textarea
                  className="input"
                  type="textarea"
                  name="comment"
                  id="comment"
                  placeholder=""
                  value={values.comment}
                  onChange={handleChange}
                  required
                />
              
              </div>

              <div className="container-input">
                <button
                  type="submit"
                  className="button-submit"
                  disabled={!(isValid && dirty)}
                 
          
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
     </div>
    
    </div>
  );
};

export default ContactPage;



