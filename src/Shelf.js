import React, { useContext } from 'react';

import Book from './Book';
import { BookshelfContext } from './App';

const Shelf = ({ title, shelfValue }) => {
  const { books } = useContext(BookshelfContext);

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books
            .filter((book) => book.shelf === `${shelfValue}`)
            .map((book) => {
              return <Book key={book.id} book={book} />;
            })}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
