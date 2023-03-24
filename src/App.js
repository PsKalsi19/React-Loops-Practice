import "./styles.css";

const items = [
  { id: 1, name: "Book", price: 10 },
  { id: 2, name: "T-Shirt", price: 15 },
  { id: 3, name: "Hat", price: 8 },
  { id: 4, name: "Sunglasses", price: 12 }
];
const total = 45;
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Shopping Cart</h1>
        <ul>
          {items.map((ele) => {
            return (
              <li id={ele.id}>
                {ele.name}:({ele.price})
              </li>
            );
          })}
        </ul>
        <p>Total Price is:{total}</p>
      </div>
      <hr />
    </div>
  );
}
