import "./styles.css";

const myWatchList = [
  { id: 1, title: "Incepion", director: "Christoper Nolan" },
  { id: 2, title: "Dark Knight", director: "Christoper Nolan" },
  { id: 3, title: "Zodiac", director: "David Fincher" },
  { id: 4, title: "Whiplash", director: "Damian Chazelle" }
];
export default function First() {
  return (
    <div className="First">
      <div className="container">
        <h1>My Watchlist</h1>
        <ul>
          {myWatchList.map((ele) => {
            return (
              <li id={ele.id}>
                {ele.title}:({ele.director})
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
}
