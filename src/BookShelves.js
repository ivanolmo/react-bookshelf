import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookshelfContext } from './App';

import Shelf from './Shelf';

const BookShelves = () => {
  const { setQuery } = useContext(BookshelfContext);
  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Shelf
              title={'Currently Reading'}
              shelfValue={'currentlyReading'}
            />
          </div>
          <div>
            <Shelf title={'Want To Read'} shelfValue={'wantToRead'} />
          </div>
          <div>
            <Shelf title={'Read'} shelfValue={'read'} />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search' onClick={() => setQuery('')}>
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookShelves;
