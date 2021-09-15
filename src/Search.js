import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

export default function Search({ searchBooks }) {
  // state variable to store and update query as it is typed
  const [query, setQuery] = useState('');

  // onChange event handler for input field, updates state variable
  const handleChange = (event) => setQuery(event.target.value.trim());

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div
          className='search-books-input-wrapper'
          // add useEffect hook so that state sent to API
          onChange={useEffect(
            () => {
              searchBooks(query);
            },
            [query]
          )}
        >
          <DebounceInput
            type='text'
            placeholder='Search by title or author'
            debounceTimeout={200}
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid' />
      </div>
    </div>
  );
}
