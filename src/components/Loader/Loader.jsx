import React from 'react';
import Lottie from 'react-lottie';
import "./loader.scss"
import animationData from './Loader.json';
import { useState } from 'react';

function Loader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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
      <Lottie options={defaultOptions} height={isMobile? 200 : 400} width={isMobile? 200: 400} />
      <div  className="loading-text">Just a moment...</div>
    </div>
  );
}

export default Loader;
