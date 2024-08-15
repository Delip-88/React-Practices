import React from "react";
import { tenHighestPopulation } from "./data";
import './App.css'

const Header = ({ tutorial, title }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{tutorial}</h1>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
    </>
  );
};
const boxStyle = {
  aspectRatio: "1/1",
  minWidth: "100px",
  backgroundColor: "gray",
  display: "grid",
  placeContent: "center",
  border: "1px solid white",
};
const containerStyle = {
  backgroundColor: "white",
  width: "fit-content",
  margin: "auto",
  display: "grid",
  gridTemplateColumns : '1fr',
  padding: "20px",
  overflow: "hidden",
  gap: "0",
};




const Bar = ({ data }) => {
  let worldPopulation = 0;
  const countries = [];

  data.forEach((item) => {
    if (item.country.toLowerCase() === "world") {
      worldPopulation = item.population;
    } else {
      countries.push(item);
    }
  });

  const countryBars = countries.map((item, index) => (
    <li key={index} className="barlist">
      <span className="countryName">{item.country}</span>
      <span className="bar" style={{ width: `${(item.population / worldPopulation) * 100}%` }}></span>
      <span className="population">{item.population}</span>
    </li>
  ));

  return (

    <ul>
      <li className="barlist" key={data[0].country}><span className="countryName">{data[0].country}</span><span className="bar" style={{width : '100%'}}></span> <span className="population">{data[0].population}</span></li>
      {countryBars}
      </ul>
  );
};
function App() {
  return (
    <>
      <Header tutorial="30 Days Of React" title="World Population" />
      <Bar data={tenHighestPopulation} />
    </>
  );
}

export default App;
