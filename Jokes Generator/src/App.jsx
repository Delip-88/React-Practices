import { useState , useEffect } from 'react';
import validator from 'validator';
import './App.css';

function App() {
  const [jokes, setJokes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savedJokes, setSavedJokes] = useState([]);
  const [weak, setWeak] = useState('')

  const getJokes = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious,political,explicit";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();

      if (result.type === 'single') {
        setJokes(result.joke);
      } else if (result.type === 'twopart') {
        setJokes(`${result.setup} - ${result.delivery}`);
      } else {
        setJokes("No jokes available!");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    const loadSavedJokes = JSON.parse(localStorage.getItem('localJokes')) || []
    setSavedJokes(loadSavedJokes)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('localJokes',JSON.stringify(savedJokes))

  }, [savedJokes])
  

  const saveJoke = () => {
    if (!savedJokes.includes(jokes) && jokes) {
      setSavedJokes([...savedJokes, jokes]);
      alert('Joke saved successfully!');
    }
  };

  const removeJoke = (joke) => {
    setSavedJokes(prevJokes => prevJokes.filter(jk => jk !== joke));
  };

  const SavedList = () => {
    return (
      <ul>
        {savedJokes.length > 0 ? savedJokes.map((joke, index) => (
          <li key={index}>{joke} <button onClick={() => removeJoke(joke)}> Delete</button></li>
        )) : <li>No saved jokes</li>}
      </ul>
    );
  };

const validate =(value)=>{
  if (validator.isStrongPassword(value,{minLength : 8, minLowercase :1, minUppercase :1 , minNumbers :1, minSymbols :1})){
    setWeak("is strong Password")
  }else{
    setWeak("is weak password")
  }
}

  return (
    <div className="container">

<label htmlFor="pass">password : <input type="text" name="pass" id="pass" onChange={(e)=>validate(e.target.value)}/>{setWeak == '' ? null : <span style={{color :'red'}}>{weak}</span>}</label>
<br /><br />
      <button onClick={getJokes} disabled={loading}>
        {loading ? "Loading..." : "Generate Joke"}
      </button>
      <div>{jokes}</div>
      {jokes && <button onClick={saveJoke}>Save Joke</button>}
      {error && <div>Error occurred while fetching: {error.message}</div>}
      <h2>Saved Jokes</h2>
      <SavedList />
    </div>
  );
}

export default App;