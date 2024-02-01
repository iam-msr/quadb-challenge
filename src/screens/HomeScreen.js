// src/screens/HomeScreen.js

import React, { useState } from 'react';
import ShowCard from '../components/ShowCard';  // Import the ShowCard component

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className='p-5'>
      <h1 className='d-flex justify-content-center'>TV Shows</h1>
      <div className="form-group d-flex justify-content-center">
        <input
          type="text"
          value={searchTerm}
          className="form-control w-50"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for shows..."
        />
        <button className="btn btn-primary ml-1" onClick={handleSearch}>Search</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center" }}>
        {searchResults.map((result) => (
          // Use the ShowCard component to render each show
          <ShowCard key={result.show.id} show={result.show} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
