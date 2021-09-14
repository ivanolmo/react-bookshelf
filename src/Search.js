import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <DebounceInput
            type='text'
            placeholder='Search by title or author'
            debounceTimeout={1300}
            value={query}
            onChange={(event) => {
              // TODO: handle query whitespace without limiting search option
              setQuery(event.target.value);
              console.log('e.t.v. ' + event.target.value);
              console.log('query state ' + query);
            }}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid' />
      </div>
    </div>
  );
}
