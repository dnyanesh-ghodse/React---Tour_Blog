import React from 'react';
import spinner from "./Assets/Spinner.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={spinner}  alt="spinner"/>
    </div>
  );
};

export default Loading;
