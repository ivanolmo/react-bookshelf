import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import { BookshelfContext } from './App';
import Book from './Book';

const Search = () => {
  // get props from useContext
  const {
    searchedBooksList,
    setSearchedBooksList,
    searchBooks,
    query,
    setQuery,
  } = useContext(BookshelfContext);

  // onChange event handler for input field, updates state variable
  const handleChange = (event) => setQuery(event.target.value);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search' onClick={() => setQuery('')}>
          Close
        </Link>
        <div
          className='search-books-input-wrapper'
          // add useEffect hook so that state sent to BooksAPI matches input field
          // as it's typed since setState is asynchronous. also pass in state variable
          // query as the optional second arg so re-render only occurs as state
          // changes, i.e. as a search term is typed. finally, clears the search results
          // completely if the text field is empty.
          onChange={useEffect(
            () => {
              if (query === '') {
                setSearchedBooksList([]);
              } else {
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
                return <Book key={book.id} book={book} />;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
