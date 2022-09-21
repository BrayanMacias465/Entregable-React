import React from 'react';
import Quote from './Quote';

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

    const colorObj = {
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }

    return (
        <article style={colorObj} className='card'>
            <Quote randomQuote={randomQuote}/>
            <button 
                className='card_btn' 
                style={backgroundObj}
                onClick={getRandomAll}
            > &#62; </button>
        </article>
    );
}

export default QuoteBox;