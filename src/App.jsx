import { useState } from 'react';
import './App.css'
import quotes from './json/quotes.json';
import QuoteBox from './components/QuoteBox';
import colors from './utils/colors';

function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length);
  const firstQuote = quotes[getIndexRandom( quotes )];
  const firstColor = colors[getIndexRandom( colors )];

  const [randomQuote, setRandomQuote] = useState( firstQuote );
  const [randomColor, setRandomColor] = useState( firstColor );

  const backgroundObj = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom( quotes )]);
    setRandomColor(colors[getIndexRandom( colors )]);
  }

  return (
    <div style={backgroundObj} className="App">
      <QuoteBox 
        randomQuote={randomQuote} 
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
