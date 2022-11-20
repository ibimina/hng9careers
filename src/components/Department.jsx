import React from 'react';

export default function Department({ department }) {
  return (
    <div className="career_grid">
      <hr className="career_hr" />
      <p className="career_pt">{department}</p>
      <hr className="career_hr" />
    </div>
  );
}

