import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import Search from './Search';
import Error from './Error';

import './App.css';

function App() {
  // state variable that will store current books on shelf
  const [books, setBooks] = useState([]);

  // state variable that will store searched books
  const [searchedBooksList, setSearchedBooksList] = useState([]);

  // function that will fetch current books and update state
  const fetchBooks = async () => {
    const newBooks = await BooksAPI.getAll();
    setBooks(newBooks);
  };

  // utilize useEffect to fetch books from API after page fully renders
  useEffect(() => {
    fetchBooks();
  }, []);

  // function to update book shelf status. takes in book and desired shelf,
  // sends to BooksAPI, and performs backend update. Then books are fetched
  // again and state updated.
  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      fetchBooks();
    });
  };

  // function to search for books from API.
  const searchBooks = (query) => {
    BooksAPI.search(query.trim()).then((searchResults) => {
      if (searchResults.error) {
        setSearchedBooksList([]);
      } else {
        // check if book from search results is already on shelf, if so then
        // set the shelf to current status of book on shelf
        searchResults.map((result) =>
          books
            .filter((book) => book.id === result.id)
            .map((book) => (result.shelf = book.shelf))
        );
        setSearchedBooksList(searchResults);
      }
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <BookList books={books} updateShelf={updateShelf} />
        </Route>
        <Route exact path='/search'>
          <Search
            searchedBooksList={searchedBooksList}
            setSearchedBooksList={setSearchedBooksList}
            searchBooks={searchBooks}
            updateShelf={updateShelf}
          />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
