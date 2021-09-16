import React from 'react';
import { Link } from 'react-router-dom';

import WantToRead from './WantToRead';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';

const BookList = ({ books, updateShelf }) => {
  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <CurrentlyReading books={books} updateShelf={updateShelf} />
          </div>
          <div>
            <WantToRead books={books} updateShelf={updateShelf} />
          </div>
          <div>
            <Read books={books} updateShelf={updateShelf} />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
