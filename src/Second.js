import "./styles.css";

//Create an array of objects representing products
//in an online store. Each object has the following
//properties: id, name, price, and category. Write
// a React component where you can create an array
//of products and return an unordered list of
//products, where each list
//displays the product's name, price, and category.

const products = [
  { id: 1, name: "Pen", category: "Stationary" },
  { id: 2, name: "Shirt", category: "Men's Wear" },
  { id: 3, name: "Sofa", category: "Furniture" },
  { id: 4, name: "Spoons", category: "Utensils" },
  { id: 5, name: "Watch", category: "Lifestyle" },
  { id: 6, name: "Dolo 650", category: "Health-care" }
];

export default function Second() {
  return (
    <div className="second">
      <div className="container">
        <h1> Online Products</h1>
        <ul>
          {products.map(({ id, name, category }) => {
            return (
              <li id={id}>
                {name}-{category}{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
}
