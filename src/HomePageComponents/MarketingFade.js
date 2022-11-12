import parse from "html-react-parser";
import '../css/marketingFade.css';
import React, { useState, useEffect } from 'react';

const MarketingFade = (props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const wordsArr = ["Visible", "Available", "Careerible"];

  useEffect(() => {

    const interval = setInterval(() => setWordIndex(((wordIndex + 1) % wordsArr.length)), 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, [wordIndex]);

  return <span id="marketingFade" className="marketing-fade">{parse(wordsArr[wordIndex])}</span>
}
export default MarketingFade;