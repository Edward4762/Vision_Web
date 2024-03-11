import React, { useState, useEffect } from 'react';
import './Framecomponent.css';

const BrailleToEnglishConverter = ({ brailleText }) => {
  const [displayEnglish, setDisplayEnglish] = useState('');
  const [displayBraille, setDisplayBraille] = useState('');

  useEffect(() => {
    const brailleToEnglish = (brailleWord) => {
      const englishMapping = {
        '⠧⠊⠎⠊⠕⠝': 'Vision',
        '⠇⠕⠗⠑⠍': 'Lorem',
        '⠊⠏⠎⠥⠍': 'Ipsum',
        '⠁': 'A',
        '⠛⠕⠕⠙': 'Good',
        '⠺⠁⠽': 'Way',
        '⠞⠕': 'To',
        '⠞⠽⠏⠑': 'Type',
        '⠁⠽': 'Is',
        '⠊⠎': 'A',
        '⠁⠽': 'Ay'
      };
      return englishMapping[brailleWord] || brailleWord;
    };

    const animateTyping = async () => {
      const brailleWords = brailleText.split(' ');
      let displayText = '';
      for (let i = 0; i < brailleWords.length; i++) {
        setDisplayBraille(brailleWords[i]); // Display current Braille word
        displayText += brailleToEnglish(brailleWords[i]) + ' ';
        setDisplayEnglish(displayText.trim()); // Update English text
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };

    animateTyping();
  }, [brailleText]);

  return (
    <div>
      <h1 className="text-size3 text-col r-margin-bottom">{displayBraille}</h1>
      <h1 className="text-size3 text-col r-margin-bottom">{displayEnglish}</h1>
    </div>
  );
};

const FrameComponent = () => {
  const brailleText = "⠧⠊⠎⠊⠕⠝ ⠇⠕⠗⠑⠍ ⠊⠏⠎⠥⠍ ⠁ ⠛⠕⠕⠙ ⠺⠁⠽ ⠞⠕ ⠞⠽⠏⠑ ⠇⠗⠑⠍ ⠁⠽ ⠞⠕ ⠞⠽⠏⠑";

  return (
    <div className="flex padding-top pad-left">
      <BrailleToEnglishConverter brailleText={brailleText} />
    </div>
  );
};

export default FrameComponent;