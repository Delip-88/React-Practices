import { useState, useEffect } from 'react';
import Home from './Component/Home';
import './App.css';
import CatGallery from './Component/CatGallery';

function App() {
  const [cats, setCats] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";

    try {
      const response = await fetch(url);
      const result = await response.json();
      setCats(result);
      setLoading(false);
      // console.log(result);
    } catch (error) {
      setError(error);
      // console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading .... </div>;
  }
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  const calcAvg = (arr) => {
    let sum = arr.reduce((a, b) => a + b, 0);
    return (sum / arr.length).toFixed(2);
  };

  let arrAge = [];
  cats.forEach(cat => {
    let ages = cat.life_span.split('-').map(Number);
    let avgAge = ages.reduce((a, b) => a + b, 0) / ages.length;
    arrAge.push(avgAge);
  });

  let arrWeight = [];
  cats.forEach(cat => {
    let weight = cat.weight.metric.split(' - ').map(Number);
    let avgWeight = weight.reduce((a, b) => a + b, 0) / weight.length;
    arrWeight.push(avgWeight);
  });

  const CATSAVGWEIGHT = calcAvg(arrWeight);
  const CATSAVGAGE = calcAvg(arrAge);
  const IDS = []
  cats.forEach((cat) =>{IDS.push(cat.id)})
  return (
    <>
      <Home weight={CATSAVGWEIGHT} breed={cats.length} years={CATSAVGAGE} />
      <CatGallery data = {IDS}/>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <strong>ID:</strong> {cat.id}<br />
            <strong>Name:</strong> {cat.name}
          </li>
        ))}

      </ul>
    </>
  );
}

export default App;
