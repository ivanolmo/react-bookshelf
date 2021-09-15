import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import Book from './Book';

export default function Search({
  searchedBooksList,
  searchBooks,
  updateShelf,
}) {
  // state variable to store and update query as it is typed
  const [query, setQuery] = useState('');

  // onChange event handler for input field, updates state variable
  const handleChange = (event) => setQuery(event.target.value);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div
          className='search-books-input-wrapper'
          // add useEffect hook so that state sent to API matches input field
          // because setState hook is asynchronous. also pass in state variable
          // query as the optional second arg so re-render only occurs as state
          // changes.
          onChange={useEffect(
            () => {
              if (query) {
                searchBooks(query);
              }
            },
            [query]
          )}
        >
          <DebounceInput
            autoFocus
            type='text'
            placeholder='Search by title or author'
            debounceTimeout={200}
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='bookshelf'>
        <div className='bookshelf-books'>
          <div className='search-books-results'>
            <ol className='books-grid'>
              {searchedBooksList.map((book) => {
                return (
                  <Book key={book.id} book={book} updateShelf={updateShelf} />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
