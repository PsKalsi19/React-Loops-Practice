/*Create an array of objects representing students in a class. 
Each object has the following properties: id, name, grade, and attendance. 
Write a React component where you can create an array of students and 
generate an ordered list of students,
 where each list item displays the student's name, grade, and attendance. */
const students = [
  { id: 1, name: "Prabhjot", grade: "D-", attendance: "35%" },
  { id: 2, name: "Amisha", grade: "A-", attendance: "85%" },
  { id: 3, name: "Sarabjeet", grade: "B-", attendance: "95%" },
  { id: 4, name: "Ronit", grade: "D-", attendance: "35%" },
  { id: 5, name: "Kiran", grade: "D-", attendance: "35%" },
  { id: 6, name: "Sidharth", grade: "B+", attendance: "45%" }
];
export default function Seventh() {
  return (
    <div className="seventh">
      <h1>Student Details</h1>
      <ol>
        {students.map(({ id, name, grade, attendance }) => (
          <li key={id} id={id}>
            {name} attendance is {attendance} and was able to secure {grade}{" "}
            grade.
          </li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
