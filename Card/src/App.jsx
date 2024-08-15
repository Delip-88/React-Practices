import { useState, useEffect } from "react";
import "./App.css";
import a from "./a.png";
import { data } from "./data";

const BoilerPlate = ({ data }) => {
  const { Name, Population, Capital, Currency, Language } = data;

  return (
    <div className="card">
      <h3>{Name}</h3>
      <div className="wrapper">
        <strong>Capital: </strong>
        <span>{Capital}</span>
      </div>
      <div className="wrapper">
        <strong>Population: </strong>
        <span>{Population}</span>
      </div>
      <div className="wrapper">
        <strong>Currency: </strong>
        <span>{Currency}</span>
      </div>
      <div className="wrapper">
        <strong>Language: </strong>
        <span>{Language}</span>
      </div>
    </div>
  );
};

function App() {
  const design = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  };
  const listStyle = {
    listStyleType: "none",
    padding: "3px 10px",
    textAlign: "center",
    backgroundColor: "#2ACFCF",
    fontSize: "25px",
    borderRadius: "6px",
    color: "white",
    marginRight: "10px",
    width: "fit-content",
    textTransform: "capitalize",
  };

  const head = ({ fullName, post, link }) => {
    return (
      <>
        <img src={link} alt="Profile" style={{ ...design }} />
        <h3 style={{ textTransform: "uppercase", fontSize: "30px" }}>
          {fullName}
        </h3>
        <caption style={{ display: "block", textAlign: "left", color: "gray" }}>
          {post}
        </caption>
      </>
    );
  };

  const skills = [
    "html",
    "css",
    "react",
    "redux",
    "python",
    "flask",
    "django",
    "numPy",
    "pandas",
    "data Analysis",
    "MySql",
    "Git",
  ];
  const btnLinks = skills.map((skill) => (
    <li key={skill} style={{ ...listStyle }}>
      {skill}
    </li>
  ));

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [darkMode]);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const initialCountry = data[0];
  const [details, setDetails] = useState(initialCountry);

  const chooseRandom = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setDetails(data[randomIndex]);
  };

  return (
    <>
      <div
        className="container"
        style={{
          padding: "20px 50px",
          backgroundColor: "#F0F1F7",
          borderRadius: "26px",
        }}
      >
        {head({
          fullName: "Rohan Kisikebe",
          post: "Software Engineer, Nepal",
          link: a,
        })}
        <ul style={{ display: "flex" }}>{btnLinks}</ul>
        <button onClick={changeMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <BoilerPlate data={details} />
      <button className="btn" onClick={chooseRandom}>
        Select Country
      </button>
    </>
  );
}

export default App;
