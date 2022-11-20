import React from 'react';

export default function Interns({ position, location }) {
  return (
    <>
      <li className="career_flex">
        <p className="career_small">{position}</p>
        <p className="career_small">{location}</p>
        <div className="career_arrow">
          <p>Apply</p>
          <img
            src="./assets/arrow.svg"
            alt="arrow pointing right"
            className="career_arrowicon"
          />
        </div>
      </li>
    </>
  );
}

