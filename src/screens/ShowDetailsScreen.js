// src/screens/ShowDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieForm from '../components/common/MovieForm';

const ShowDetailsScreen = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);


  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data));
  }, [id]);

  const handleBookTicket = () => {
    // Open the form when the button is clicked
    setIsFormOpen(true);
    // Logic to open the form with movie details and book ticket
    // You can use local/session storage for storing user details
    console.log('Booking ticket for:', showDetails.name);
  };

  const handleCloseForm = () => {
    // Close the form when needed
    setIsFormOpen(false);
  };


  return (
    <div>
      {showDetails ? (
        <div className='m-3'>
          <div className='d-flex justify-content-between'>

            <Link to="/">Go Back</Link>
          </div>
          <br />
          <div className='d-flex justify-content-around flex-wrap' style={{columnGap:'20px'}}>
            <img className='mb-5' src={showDetails.image?.original} alt={showDetails.name} style={{flex:'1', width: "100%", height: "400px", objectFit: 'scale-down' }} />

            <div style={{flex:'2',flexBasis:'300px'}}>
              <h2>{showDetails.name}</h2>
              <h4>Language: {showDetails.language}</h4>
              <h4>Summary</h4>
              <p className='text-secondary' dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
              <div className="btn btn-primary mb-5" style={{float:"right",marginRight:'25px'}} onClick={handleBookTicket}>Book Ticket</div>
             

            </div>
          </div>
          <br />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Render the MovieForm component if the form is open */}
      {isFormOpen && <MovieForm movieDetails={showDetails} onClose={handleCloseForm} />}
    </div>
  );
};

export default ShowDetailsScreen;
