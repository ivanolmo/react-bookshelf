import React from 'react';
import Book from './Book';

const Read = ({ books, updateShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Read</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books
            .filter((book) => book.shelf === 'read')
            .map((book) => {
              return (
                <Book key={book.id} book={book} updateShelf={updateShelf} />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Read;
