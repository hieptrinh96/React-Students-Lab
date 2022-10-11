const Score = (props) => {
  return (
    <>
      <h2>Score!</h2>
      <p>{props.score.score}</p>
      <p>{props.score.date}</p>
    </>
  );
}

export default Score;