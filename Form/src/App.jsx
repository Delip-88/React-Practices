import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "male", // Changed to string value
    sub: {
      english: false,
      math: false,
      physics: false,
    },
    resume: null, // Changed to null to manage file input
    url: "",
    select: "",
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        sub: { ...prevFormData.sub, [name]: checked },
      }));
    } else if (type === "radio") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        gender: value,
      }));
    } else if (type === "file") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        resume: files[0], // Update with the selected file
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name *</label>
        <input
          required
          type="text"
          name="fname"
          id="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="Enter first name"
        />
        <br />
        <label htmlFor="lname">Last Name *</label>
        <input
          required
          type="text"
          name="lname"
          id="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Enter last name"
        />
        <br />
        <label htmlFor="email">Enter Email *</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br />
        <label htmlFor="contact">Contact *</label>
        <input
          required
          type="number"
          name="contact"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter your contact no."
        />
        <br />
        <label>Gender *
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        </label>
        <br />
        <label>Your best Subject
        <input
          type="checkbox"
          name="english"
          id="english"
          checked={formData.sub.english}
          onChange={handleChange}
        />
        English
        <input
          type="checkbox"
          name="math"
          id="math"
          checked={formData.sub.math}
          onChange={handleChange}
        />
        Maths
        <input
          type="checkbox"
          name="physics"
          id="physics"
          checked={formData.sub.physics}
          onChange={handleChange}
        />
        Physics
        </label>
        <br />
        <label htmlFor="resume">Upload Resume *</label>
        <input
          required
          type="file"
          name="resume"
          id="resume"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="url">Enter URL</label>
        <input
          type="url"
          name="url"
          id="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Enter URL"
        />
        <br />
        <label htmlFor="select">Select Your Choice</label>
        <select
          name="select"
          id="select"
          value={formData.select}
          onChange={handleChange}
        >
          <option value="">Select Your Answer</option>
          <optgroup label="Beginner">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JavaScript</option>
          </optgroup>
          <optgroup label="Advanced">
            <option value="4">React</option>
            <option value="5">Node</option>
            <option value="6">Express</option>
            <option value="7">MongoDB</option>
          </optgroup>
        </select>
        <br />
        <textarea
          name="about"
          id="about"
          cols="50"
          rows="6"
          value={formData.about}
          onChange={handleChange}
          placeholder="About Yourself..."
        />
        <div className="btns">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
