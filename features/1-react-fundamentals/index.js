import React from 'react';
import ReactDOM from 'react-dom/client';
import { books } from './books';

import './index.css';
import Book from './book';

const BookList = () => {
  const getBook = (id) => {
    const selectedBook = books.find((book) => book.id === id);
    console.log(selectedBook);
  };

  return (
    <section className="booklist">
      <EventExamples />
      <h1>Best sellers in Books</h1>
      {books.map((book, ind) => {
        return <Book key={book.id} {...book} BookFn={getBook} ind={ind + 1} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleBtnClick = () => {
    console.log('handle input');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submission');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input type="text" onChange={handleFormInput} name="example" style={{ margin: '1rem 0' }} />
        <button type="button" onClick={handleBtnClick}>
          click me
        </button>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
