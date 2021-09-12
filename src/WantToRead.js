import React from 'react';
import Book from './Book';

export default function WantToRead() {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          <Book />
        </ol>
      </div>
    </div>
  );
}
