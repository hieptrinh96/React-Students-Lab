const Score = ({ score }) => {
  return (
    <>
      <p><strong>Date:</strong> {score.date}</p>
      <p><strong>Score:</strong> {score.score}</p>
    </>
  );
}

export default Score;