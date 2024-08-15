import { useState } from 'react';
import './App.css';
import APIKEY from './Api';
import View from './Components/View';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [type, setType] = useState('movie');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (pageNum) => {
    setLoading(true);
    setData(null); // Reset data while loading
    setError(null); // Reset error message

    if (search.trim() === '') {
      setLoading(false);
      return;
    }

    const searchTitle = encodeURIComponent(search.trim());
    const url = `http://www.omdbapi.com/?s=${searchTitle}&type=${type}&page=${pageNum}&apikey=${APIKEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response not ok!");
      }
      const result = await response.json();
      if (result.Response === "True") {
        setData(result);
      } else {
        setData(null); // Clear data if no results
        setError(result.Error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage(prevPage => {
      const newPage = prevPage + 1;
      fetchData(newPage); // Fetch data for the next page
      return newPage;
    });
  };

  const handlePreviousPage = () => {
    setPage(prevPage => {
      const newPage = Math.max(prevPage - 1, 1); // Ensure page number is at least 1
      fetchData(newPage); // Fetch data for the previous page
      return newPage;
    });
  };

  const handleSearch = () => {
    setPage(1); // Reset page to 1 for new search
    fetchData(1); // Fetch data for the first page
  };

  const Loader = (
    <div className="loader">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
    <div className="bar4"></div>
    <div className="bar5"></div>
    <div className="bar6"></div>
    <div className="bar7"></div>
    <div className="bar8"></div>
    <div className="bar9"></div>
    <div className="bar10"></div>
    <div className="bar11"></div>
    <div className="bar12"></div>
    </div>
  );

  return (
    <>
      <div className="container">
        <header>
          <h1>Movie Mania</h1>
          <div className="inputWrapper">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>
        </header>
        {loading && Loader}
        {error && <center>{error}</center>}
        {data && data.Response === 'True' && (
          <>
            <View viewData={data} />
            <div className="controller">
              <button onClick={handlePreviousPage} disabled={page <= 1}>
                Previous
              </button>
              <button onClick={handleNextPage}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
