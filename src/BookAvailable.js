import React from 'react';
import Book from './Book';
import './available.css'

function BooksAvailable({ books }) {
  return (
    <>
      <h2 className='heading'>Books Available  now </h2>
       <div className='booklist'>
        {books.map((book) => (
          <Book className= "item"
          image={book.imageUrl}
          name={book.title}
          author={book.author}
             />
        ))}
        </div>
    </>
  );
}

export default BooksAvailable;