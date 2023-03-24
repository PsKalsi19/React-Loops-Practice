/*Create an array of objects representing recipes in a cookbook. 
Each object has the following properties: id, recipe name, recipe 
creator name. Write a React component where you can create an array 
of recipes and return an unordered list, 
where each list item displays the recipe's name and recipe creator name. */
const cookBook = [
  { id: 1, recipeName: "Quinoa Upma", recipeCreatorName: "Dassana Amit" },
  {
    id: 2,
    recipeName: "Masala Dosa Recipe",
    recipeCreatorName: "Dassana Amit"
  },
  {
    id: 3,
    recipeName: "Veg Meatballs",
    recipeCreatorName: "JULIE & AMY LUXEMBERG"
  },
  { id: 4, recipeName: "Butter Chicken", recipeCreatorName: "Prerna Singh" }
];
export default function Fifth() {
  return (
    <div className="Fifth">
      <h1>Recipe Book</h1>
      <ul>
        {cookBook.map(({ id, recipeName, recipeCreatorName }) => (
          <li key={id} id={id}>
            <strong>{recipeName}</strong> <em>({recipeCreatorName})</em>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
