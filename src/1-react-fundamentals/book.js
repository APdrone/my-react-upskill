const Book = ({ author, title, img, children, BookFn, id, ind }) => {
  const inlineHeadingStyles = { color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' };

  return (
    <article className="book">
      <h1>{ind}</h1>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h2 style={inlineHeadingStyles}>{author} </h2>
      {children}
      <button onClick={() => BookFn(id)}>Print</button>
    </article>
  );
};

export default Book;
