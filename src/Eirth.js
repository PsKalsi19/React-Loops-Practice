/*Create an array of objects representing movies in your watchlist. 
Each object has the following properties: id, title, director, and runtime. 
Write a React component where you can create an array of movies 
and generate an ordered list of movies, 
where each list item displays the movie's title, director, and runtime. */

const myWatchList = [
  {
    id: 1,
    title: "Incepion",
    director: "Christoper Nolan",
    runtime: "2h 28mins"
  },
  {
    id: 2,
    title: "Dark Knight",
    director: "Christoper Nolan",
    runtime: "2h 32mins"
  },
  { id: 3, title: "Zodiac", director: "David Fincher", runtime: "2h 37mins" },
  { id: 4, title: "Whiplash", director: "Damian Chazelle", runtime: "1h47mins" }
];

export default function Eirth() {
  return (
    <div className="eirth">
      <h1>My watchlist details</h1>
      <ol>
        {myWatchList.map(({ id, title, director, runtime }) => (
          <li key={id} id={id}>
            {title} was directed by {director} and is {runtime} long
          </li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
