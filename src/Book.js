import React from 'react';
import './App.css';

export default function Book({ book, updateShelf }) {
  const { title, authors, imageLinks } = book;
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
              defaultValue={book.shelf}
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
}
