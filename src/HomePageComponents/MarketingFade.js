import parse from "html-react-parser";
import '../css/marketingFade.css';
import React, { useState, useEffect } from 'react';

const MarketingFade = (props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const wordsArr = ["Available", "Visible", "Careerible"];
  const [marketingClass, setMarketingClass] = useState("marketing-heading");

  useEffect(() => {

    setMarketingClass(`marketing-heading marketing-fade0`);

    setTimeout(() => {
      setWordIndex(((wordIndex + 1) % wordsArr.length));
    }, 5000);

    setTimeout(() => {
      setMarketingClass(`marketing-heading marketing-fade1`);
    }, 2500)
    
  }, [wordIndex]);

  return <span id="marketingFade" className={parse(marketingClass)}>{parse(wordsArr[wordIndex])}</span>
}
export default MarketingFade;