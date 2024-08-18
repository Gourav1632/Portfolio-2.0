import React from 'react';
import Lottie from 'react-lottie';
import "./loader.scss"
import animationData from './Loader.json';

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="loading-screen">
      <Lottie options={defaultOptions} height={400} width={400} />
      <div  className="loading-text">Just a moment...</div>
    </div>
  );
}

export default Loader;
