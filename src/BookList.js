import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import WantToRead from './WantToRead';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import { BookshelfContext } from './App';

const BookList = () => {
  const { books } = useContext(BookshelfContext);
  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <CurrentlyReading books={books} />
          </div>
          <div>
            <WantToRead books={books} />
          </div>
          <div>
            <Read books={books} />
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
