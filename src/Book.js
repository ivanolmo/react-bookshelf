import React from 'react';

export const Book = () => {
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div className='book-shelf-changer'>
            <select>
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
        <div className='book-title' />
        <div className='book-authors' />
      </div>
    </li>
  );
};
