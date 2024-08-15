import React from "react";
import { useState } from "react";
import { json } from "react-router-dom";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, seterrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is appreciated";
    if (!formData.email) newErrors.email = "Email is appreciated";
    if (!formData.address) newErrors.address = "Address is appreciated";
    if (!formData.message) newErrors.message = "Message is appreciated";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "email is invalid";

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      seterrors(validateErrors);
    }
    console.log(JSON.stringify(formData, null, 2));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
    seterrors((prevErrors)=>({...prevErrors,[name] : ''}))
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="wrapper">
          <label htmlFor="name">
            Full Name :{" "}
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </label>
        </div>
        <div className="wrapper">
          <label htmlFor="email">
            Email :{" "}
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="xy@gmail.com"
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </label>
        </div>
        <div className="wrapper">
          <label htmlFor="address">
            Address :{" "}
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <span style={{ color: "red" }}>{errors.address}</span>
            )}
          </label>
        </div>
        <div className="wrapper">
          <label htmlFor="message">
            Message :{" "}
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Get in touch with us.</p>
    </div>
  );
};

export default Contact;
