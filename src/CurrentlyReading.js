import React from 'react';

export default function CurrentlyReading() {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>Currently Reading</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          <li>{/* Book Component */}</li>
        </ol>
      </div>
    </div>
  );
}
