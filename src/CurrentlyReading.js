import React from 'react';
import Book from './Book';

export default function CurrentlyReading({ books }) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Currently Reading</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books
            .filter((book) => book.shelf === 'currentlyReading')
            .map((book) => {
              return <Book key={book.id} />;
            })}
        </ol>
      </div>
    </div>
  );
}
