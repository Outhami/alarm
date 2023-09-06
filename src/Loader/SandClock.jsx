import React from 'react';
import './sandClock.css';
import { CgSandClock } from 'react-icons/cg';

const SandClockSpinner = ({ isWider }) => {
  return (
    <div className={`sand-clock-spinner ${isWider ? 'wider-spinner' : ''}`}>
      <div className="icon-container">
        <CgSandClock className="spinning-sand-clock" />
      </div>
    </div>
  );
};

export default SandClockSpinner;
