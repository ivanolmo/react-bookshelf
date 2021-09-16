import React, { useContext } from 'react';
import { BookshelfContext } from './App';
import './App.css';

const Book = ({ book }) => {
  const { title, authors, imageLinks } = book;
  const { updateShelf } = useContext(BookshelfContext);

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: '128px',
              height: '193px',
              backgroundImage: `url(${imageLinks && imageLinks.thumbnail})`,
            }}
            alt='book-cover'
          />
          <div className='book-shelf-changer'>
            <select
              onChange={(event) => updateShelf(book, event.target.value)}
              defaultValue={book.shelf ? book.shelf : 'none'}
            >
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want To Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{authors && authors.join(', ')}</div>
      </div>
    </li>
  );
};

export default Book;
