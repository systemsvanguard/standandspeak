// src/components/QuoteOfTheDay.tsx
import { useEffect, useState } from 'react';
import { quotes } from '../data/random_quotes';

type Quote = {
  id: number;
  category: string;
  quotation: string;
  source: string;
};

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const handleClick = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="mb-4 p-3 bg-light border rounded text-center">
      {/* <h5 className="text-secondary mb-2">Quote of the Day</h5>  */}
      {quote && (
        <>
          <blockquote className="blockquote">
            <p className="mb-1 fst-italic">“{quote.quotation}”</p>
            <footer className="blockquote-footer">{quote.source}</footer>
          </blockquote>
          <button className="btn btn-sm btn-outline-primary mt-2" onClick={handleClick}>
            <i className="bi bi-arrow-repeat"></i>  New Quote ...
          </button>
        </>
      )}
    </div>
  );
};

export default QuoteOfTheDay;
