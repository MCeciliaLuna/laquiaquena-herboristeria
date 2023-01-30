import React from 'react';
import { Link } from 'react-router-dom';

const ButtonUserVolver = () => {
  
  return (
    <div className="text-center">
      <Link to="/home">
      <button className="btn m-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
      </button>
      </Link>
    </div>
  );
};

export default ButtonUserVolver;