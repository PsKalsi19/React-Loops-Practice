import "./styles.css";
/*
 Create an array of objects representing employees in a company. 
 Each object has the following properties: id, name, department,
  and salary. Write a React component  where you can create an
   array of employees and return an unordered list of employees, 
   where each list item displays the employee's name, 
   department, and salary.
*/
const employees = [
  { id: 1, name: "Rounak", department: "IT", salary: 4000 },
  { id: 2, name: "Ronit", department: "Photography", salary: 3000 },
  { id: 3, name: "Sunny", department: "Art and Design", salary: 5000 },
  { id: 4, name: "Shraddha", department: "IT", salary: 6000 },
  { id: 5, name: "Ansh", department: "R&D", salary: 7000 },
  { id: 6, name: "Ruhi", department: "HR", salary: 4000 }
];
export default function Fourth() {
  return (
    <div className="Fourth">
      <div className="container">
        <h1>Employee details</h1>
        <ul>
          {employees.map(({ id, name, department, salary }) => {
            return (
              <li key={id} id={id}>
                <strong> {name}</strong> works at {department} and earns{" "}
                {salary}/-.
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
}
