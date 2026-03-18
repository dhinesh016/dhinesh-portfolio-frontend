import React, { useState } from "react";
import Socialmedia from "./Socialmedia";
import { useFormik } from "formik";
import ValidateSchema from "./ValidateSchema";
import axios from "axios"
import  { toast,ToastContainer,Bounce } from "react-toastify"
let initialdata = {
  username: "",
  email: "",
  mobile: "",
  message: "",
};
const Contact = () => {
  const[disabled,setDisabled]=useState(false);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: initialdata,
    validationSchema: ValidateSchema,
    onSubmit:async(data) => {
      setDisabled(true);
       toast.warn("wait for some moment.....message was sending....")
      try{ 
       const res =await axios.post("http://localhost:9095/contact",data);
        handleReset();
      toast.success(res.data.concat(" please check your email....."))
      }
      catch(error){
        toast.error("message not send try again later....");
         console.log(error)
      }
      finally{
        setDisabled(false)
      setTimeout(()=>{
      },5000)
    }
      
    },
  });
  return (
    
    <div id="contact" className="contact-container" data-aos="zoom-in">
      <div className="contact-info" data-aos="fade-right" data-aos-delay="500">
        <h2 className="heading">Contact</h2>
        <h4>Email</h4>
        <h5>wwwskd007@gmail.com</h5>
        <Socialmedia />
      </div>
      <div className="contact-form" data-aos="fade-left" data-aos-delay="500">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            name="username"
            onChange={handleChange}
            value={values.username}
            onBlur={handleBlur}
          />
          <p className="error">
            {touched.username && errors.username ? errors.username : ""}
          </p>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          <p className="error">
            {touched.email && errors.email ? errors.email : ""}
          </p>
          <input
            type="tel"
            placeholder="Enter your contact(Optional)"
            name="mobile"
            onChange={handleChange}
            value={values.mobile}
            onBlur={handleBlur}
          />
          <p className="error">
            {touched.mobile && errors.mobile ? errors.mobile : ""}
          </p>
          <textarea
            name="message"
            id=""
            placeholder="Enter your Message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
          ></textarea>
          <p className="error">
            {touched.message && errors.message ? errors.message : ""}
          </p>
          <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition={Bounce}
                
                />
          <button type="submit" className="disabled" disabled={disabled}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
