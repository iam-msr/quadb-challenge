// src/components/ShowCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div className='card rounded' key={show.id} style={{ width: '240px', margin: '12px', borderRadius: '10px 10px' }}>
      <div>
        <div>
          <img style={{ width: '100%', height: '260px', borderRadius: '10px 10px' }} src={show.image?.medium || 'noimage.jpg'} alt="noimage.jpg" />
        </div>

        <div style={{ padding: '15px' }}>
          <div className='d-flex justify-content-between align-items-center mb-3' >
            <div className='fs-4'>{show.name}</div>
            <div className='text-primary'>{show.rating?.average}</div>
          </div>

          <div className='d-flex justify-content-between align-items-center ' style={{ marginBottom: '4px' }}>
            <div className=' mb-0' style={{fontSize:'large'}}>{show.language}</div>
            <div className=' mb-0 fw-bold'>{show.runtime || '0'} mins</div>
          </div>
          <div className='mb-1 text-secondary' >{show.genres.join(', ')}</div>
          <Link to={{ pathname: `/show/${show.id}`, state: { show } }}>
            <button className='btn btn-primary d-flex ml-auto mt-3'>View Details</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ShowCard;
