// src/components/common/MovieForm.js

import React, { useState } from 'react';

const MovieForm = ({ movieDetails, onClose }) => {
  const [selectedShowTimings, setSelectedShowTimings] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleSubmit = () => {
    const formData = {
      movieName: movieDetails.name,
      language: movieDetails.language,
      runtime: movieDetails.runtime,
      showTimings: selectedShowTimings,
      day: selectedDay,
      // Add more form fields as needed
    };

    console.log('Form Data:', formData);

    onClose();
  };

  const showTimingsOptions = ['11am', '2pm', '6pm', '9pm'];
  const daysOptions = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div style={{ padding: '20px', width: '80%', margin: 'auto', backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginBottom: '45px' }}>
      <h3 style={{ textAlign: 'center' }}>Booking Form - {movieDetails.name}</h3>

      <div className='d-flex justify-content-between'>
        <p>Language: {movieDetails.language}</p>
        <p>Runtime: {movieDetails.runtime} minutes</p>
      </div>

      <label style={{marginRight:'5px',marginBottom:'15px'}} htmlFor="day">Day:</label>
      <select
        id="day"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        <option value="" disabled>Select day</option>
        {daysOptions.map((day, index) => (
          <option key={index} value={day}>{day}</option>
        ))}
      </select>
      <div>

        <label style={{marginRight:'5px'}}  htmlFor="showTimings">Show Timings:</label>
        <select
          id="showTimings"
          value={selectedShowTimings}
          onChange={(e) => setSelectedShowTimings(e.target.value)}
        >
          <option value="" disabled>Select show timings</option>
          {showTimingsOptions.map((timing, index) => (
            <option key={index} value={timing}>{timing}</option>
          ))}
        </select>
      </div>



      {/* Additional form fields can be added here */}
      <div className='d-flex justify-content-between mt-3'>
        <div className='btn btn-danger' onClick={onClose}>Cancel</div>
        <div className='btn btn-primary' onClick={handleSubmit}>Submit</div>
      </div>
    </div>
  );
};

export default MovieForm;
