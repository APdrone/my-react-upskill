# repo

https://github.com/john-smilga/react-course-v3

# reactdom

we use reactdom to place our component in the root

```jsx
ReactDOM.render(<Greeting />, document.getElementById('root'));
```

from react 18 we nneed to do like that

```jsx
const root = createRoot(document.getElementById('root'));

root.render(<BookList />);
```

# Behind the scene for JSX

```jsx
function Greeting() {
  return <h4>this is my first component</h4>;
}

const Greeting = () => {
  return React.createElement('h1', {}, 'hello world');
};
```

another example:

```jsx
function Greeting() {
  return (
    <div>
      <h4>this is my first component</h4>
    </div>
  );
}
```

like this:

```jsx
const Greeting = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
};
```

this getting messier as code increases

# JSX rules

- always return single element, means should have single parent

- use camelcase for html attributes(eg onClick etc)

-- className instead of class

we can usefragment as

```jsx
function Greeting() {
  return (
    <React.Fragment>
      <h4>this is my first component</h4>
    </React.Fragment>
  );
}
```

or simply <> </>

# adding css

1. to use "index.css" and then import it where to use

2. or directly in the JSX like

```jsx
const Author = () => <h4 style={{ color: '#617d98', fontsize: '0.75rem' }}>Arthur Conan Doyle</h4>;
```

# ising JS in JSX

we can define variables outside or inside the component and can use it using curly braces {}. in this example , we have defined author(outside) and title(inside) the function

```jsx
const author = 'Arthur Conan Doyle';

const Book = () => {
  const title = 'The Complete Novels of Sherlock Holmess';
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/81StezluKUS._AC_UY218_.jpg" alt="" />
      <h1>{title}</h1>
      <h4 style={{ color: '#617d98', fontsize: '0.75rem' }}>{author}</h4>
    </article>
  );
};
```

but this wont work.

`  <p>{let x=6}</p>`

our expression should return some values

# props

props is basically an object ans that's why ewe can use destructuring

props={};

we can use like

```jsx
const Book = (props) => {
  const { img, author, title } = props;
};
```

or directly props at the function level

```jsx
const Book = ({ img, author, title }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={{ color: '#617d98', fontsize: '0.75rem' }}>{author.toUpperCase()}</h4>
    </article>
  );
};
```

# props children

to get children we can use

we added the content between the component , closing and opening tag

```jsx
function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} author={firstBook.author} title={firstBook.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex minima officiis illum nobis assumenda corrupti
        molestias cum quo sit.
      </Book>
      <Book img={secondBook.img} author={secondBook.author} title={secondBook.title} />
    </section>
  );
}
```

and then we can use it in the component

```jsx
const Book = ({ img, author, title, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={{ color: '#617d98', fontsize: '0.75rem' }}>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};
```

# simple list

```jsx
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/81StezluKUS._AC_UY218_.jpg',
    title: 'Money problems an waty to deal',
    author: 'Money Boyle',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81StezluKUS._AC_UY218_.jpg',
    title: 'The Complete Novels of Sherlock Holmes',
    author: 'arthur conan doyle',
  },
];
```

if we try to directly use "books" in the JSx then we will get error , as it complains that we cannot have react children as "object"

```jsx
function BookList() {
  return <section className="booklist">{books}</section>;
}
```

but it is possible for the string

`books=['john','albert','Samson']`

# adding key

to keep track of the item, we add key(unique value) for React

also we can pass props in two ways:

1.

```jsx
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title } = props.book;
};
```

2. directly using destructuring

```jsx
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
}

const Book = ({ img, author, title }) => {
return ()
}

```

# events basics

used onclick hamdler, onmouseover

when used without argument , pass the reference

```jsx
<button type="button" onClick={onClickHandler}>
  Submit
</button>
```

when used with reference , pass using arrow

```jsx
<button type="button" onClick={() => complexExample(author)}>
  Submit Again
</button>
```

Full Example:

```jsx
const Book = ({ img, author, title }) => {
  const onClickHandler = () => {
    console.log('hello there!!!');
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 style={{ color: '#617d98', fontsize: '0.75rem' }}>{author.toUpperCase()}</h4>
      <button type="button" onClick={onClickHandler}>
        Submit
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Submit Again
      </button>
    </article>
  );
};
```

# import and export statements

we will create "book.js" and "books.js" file and then we can move the code
to corresponsing files.

we have option to use "default export" or "named export"

for books.js we will use "named export"

```jsx
export const books = [];
```

and then in index.js file , we will use import with curly braces and use the exact name in curly braces we defined in the books.js(as using named named export )

`import {book} from "./book";`

for book.js we can use say "default export"

also keep in mind we can multiple named export but only one
default export in a file

```jsx
import React from 'react';

const book = () => {
  return <div>book</div>;
};
```

export default book

and then we can import in the index.js file using

`import Book from "./Book";`

we dont need to look for specific name , as we exporting book as default from there , also we can use another name and it will work fine

`import SpecficBook from "./Book";
`

# Free hosting

to host in netlify, we can create production build using

npm run build

once it is done, it will be availble in the "build" folder and then drop it in the netlify (using manually develop step)

https://neon-naiad-56ba8c.netlify.app/
