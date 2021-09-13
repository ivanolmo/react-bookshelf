import React from 'react';
import Book from './Book';

export default function WantToRead({ books, updateShelf }) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Want to Read</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books
            .filter((book) => book.shelf === 'wantToRead')
            .map((book) => {
              return (
                <Book key={book.id} book={book} updateShelf={updateShelf} />
              );
            })}
        </ol>
      </div>
    </div>
  );
}
