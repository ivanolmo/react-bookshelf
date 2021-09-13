import React from 'react';
import WantToRead from './WantToRead';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';

export default function BookList({ books, updateShelf }) {
  return (
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
      {/* break search off into separate component */}
      <div className='open-search'>
        <button onClick={() => console.log('search clicked')}>
          Add a book
        </button>
      </div>
    </div>
  );
}
