import "./styles.css";
/*Create an array of objects representing books in a library. 
Each object has the following properties: id, title, author, and rating. 
Write a React component where you can create an array of books 
and return an unordered list of books, 
where each list item displays the book's title, author, and rating. */

const books = [
  {
    id: 1,
    title: "Psychology of Money",
    author: "Morgan Housel",
    rating: "4.6"
  },
  {
    id: 2,
    title:
      "Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions",
    author: "Gaur Gopal Das",
    rating: "4.6"
  },
  {
    id: 3,
    title: "Ikagai",
    author: "Hector Garcia",
    rating: "4.6"
  },
  {
    id: 4,
    title: "Sapiens: A Brief History of Humankind",
    author: " Yuval Noah Harari",
    rating: "4.7"
  },
  {
    id: 5,
    title: "The Silent patient",
    author: "Alex Michaelidas",
    rating: "4.5"
  }
];
export default function Third() {
  return (
    <div className="third">
      <div className="container">
        <h1> Books</h1>
        <ul>
          {books.map(({ id, title, author, rating }) => (
            <li key={id} id={id}>
              <strong>{title}</strong> is written by <em>{author}</em> and has{" "}
              {rating}
              <small>/5</small> rating
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
}
