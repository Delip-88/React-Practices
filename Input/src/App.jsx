import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    number: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Clear specific error when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "name is required";
    if (!formData.age) newErrors.age = "age is required";
    if (!formData.number) newErrors.number = "number is required";
    if (!formData.gender) newErrors.gender = "gender is required";
    if (!formData.email) newErrors.email = "email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "email is invalid";
    if (!formData.address) newErrors.address = "address is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      console.log(JSON.stringify(formData, null, 2));
    }
  };

  const errorDesign = {
    color: "red",
    textTransform: "capitalize",
  };

  return (
    <>
      <form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid white",
          padding: "10px 20px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Name:
          <input onChange={handleChange} type="text" name="name" id="name" />
          {errors.name && <span style={{ ...errorDesign }}>{errors.name}</span>}
        </label>
        <label htmlFor="age">
          Age:
          <input onChange={handleChange} type="number" name="age" id="age" />
          {errors.age && <span style={{ ...errorDesign }}>{errors.age}</span>}
        </label>
        <label htmlFor="number">
          Number:
          <input
            onChange={handleChange}
            type="number"
            name="number"
            id="number"
          />
          {errors.number && (
            <span style={{ ...errorDesign }}>{errors.number}</span>
          )}
        </label>
        <label>
          Gender:
          <input
            onChange={handleChange}
            type="radio"
            name="gender"
            checked={formData.gender === "male"}
            value="male"
          />
          Male
          <input
            onChange={handleChange}
            type="radio"
            name="gender"
            checked={formData.gender === "female"}
            value="female"
          />
          Female
          {errors.gender && (
            <span style={{ ...errorDesign }}>{errors.gender}</span>
          )}
        </label>
        <label htmlFor="address">
          Address:
          <input
            onChange={handleChange}
            type="text"
            name="address"
            id="address"
          />
          {errors.address && (
            <span style={{ ...errorDesign }}>{errors.address}</span>
          )}
        </label>
        <label htmlFor="email">
          Email:
          <input onChange={handleChange} type="email" name="email" id="email" />
          {errors.email && (
            <span style={{ ...errorDesign }}>{errors.email}</span>
          )}
        </label>
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h2>Form Data</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
