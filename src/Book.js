import React from 'react';
import './book.css'

const Book = ({ image, name, author }) => {
  return (
    <div class = "each">
      <img src={image} alt={"Not available"} className="book-image" />
      <div>
        <h3 className='booktitle'>{name}</h3>
        <p className='bookauthor' >by {author}</p>
      </div>
    </div>
  );
};

export default Book;
