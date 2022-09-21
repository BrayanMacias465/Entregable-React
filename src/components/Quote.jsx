import React from 'react';

const Quote = ({randomQuote}) => {

    return (
        <>
            <p className='card_quote'>{randomQuote.quote}</p>
            <h1 className='card_author'>{randomQuote.author}</h1>
        </>
    );
}

export default Quote;