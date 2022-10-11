import Score from "./Score";
const Student = (props) => {
  return (
    <>
      <h2>Name:</h2>
      <p>{props.student.name}</p>
      <h2>Bio:</h2>
      <p>{props.student.bio}</p>
      {props.student.scores.map(score =>
        <Score score={score} />
      )}
    </>
  );
}

export default Student;