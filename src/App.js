import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList.js';
import './App.css';

function App() {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // };

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
      <div className='app'>
        <Route exact path='/'>
          <BookList books={books} updateShelf={updateShelf} />
        </Route>
        <Route path='/search'>
          {/* add search component */}
          <div>search page</div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
