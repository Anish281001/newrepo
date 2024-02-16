import React, { useState } from 'react';
import books from './Bookdata';
import BooksAvailable from './BookAvailable'
import Book from './Book'; 
import './searchbar.css'


const SearchBar = () => {
  const [Term, setTerm] = useState('');

  const [Results, setResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;

    setTerm(query);

    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filteredBooks = books.filter(book =>

      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
     setResults(filteredBooks);
  };

  return (
    <>
    <div class = 'fullpage' > 
      <h1 className='pageheading'>Book Search App</h1>
      <input className='searchbox'
        type="text"
        value={Term}
        onChange={handleSearch}
      />
    
      <div>
        {Results.length > 0 && <h2 className='results'>Results are :-</h2>}
        {Results.map(book => (
          <Book
            image={book.imageUrl}
            name={book.title}
            author={book.author}
          />
        ))}
      </div>
    </div>
    {Results.length === 0 && <BooksAvailable books={books} />}
    </>
  );
};

export default SearchBar;
