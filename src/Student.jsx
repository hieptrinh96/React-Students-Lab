import Score from "./Score";
const Student = ({ student }) => {
  return (
    <>
      <h2>Name:</h2>
      <p>{student.name}</p>
      <h2>Bio:</h2>
      <p>{student.bio}</p>
      {student.scores.map((score, index) =>
        <Score key={index} score={score} idx={index} />
      )}
    </>
  );
}

export default Student;