import "./styles.css";

/*Create an array of objects representing products in an online store. 
Each object has the following properties: id, name, price, and category.
 Write a React component where you can create an array of products and 
 generate an ordered list of products, 
where each list item displays the product's name, price, and category. */

const products = [
  { id: 1, name: "Pen", category: "Stationary", price: 5 },
  { id: 2, name: "Shirt", category: "Men's Wear", price: 2000 },
  { id: 3, name: "Sofa", category: "Furniture", price: 32000 },
  { id: 4, name: "Spoons Set", category: "Utensils", price: 140 },
  { id: 5, name: "Watch", category: "Lifestyle", price: 4300 },
  { id: 6, name: "Dolo 650", category: "Health-care", price: 30 }
];

export default function Ninth() {
  return (
    <div className="ninth">
      <div className="container">
        <h1> Online Products List</h1>
        <ol>
          {products.map(({ id, name, category, price }) => {
            return (
              <li id={id}>
                {name} is of {price}/- and belongs to {category}.
              </li>
            );
          })}
        </ol>
      </div>
      <hr />
    </div>
  );
}
