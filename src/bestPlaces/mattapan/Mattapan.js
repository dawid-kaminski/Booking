import React from 'react';
import './Mattapan.css';

function Mattapan() {
  return (
    <div className="mattapan-container">
      <div className="mattapan">
        <div className="mattapan__img">
          <img
            src="https://mainwprentals.b-cdn.net/wp-content/uploads/2020/11/mattapan_optimized.jpg"
            alt=""
          />
          <div className="mattapan__text">
            <div className="mattapan__header">Mattapan</div>
            <div className="mattapan__subheader">1 listings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mattapan;
