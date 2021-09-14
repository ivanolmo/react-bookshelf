import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import Error from './Error';

import './App.css';

function App() {
  // state variable that will store books
  const [books, setBooks] = useState([]);

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

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <BookList books={books} updateShelf={updateShelf} />
        </Route>
        <Route exact path='/search'>
          {/* add search component */}
          <div>search page</div>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
