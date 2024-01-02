import React from "react";

function Guess({ guess }) {
  const letters = [...guess];

  return (
    <p className="guess">
      {letters.map((letter, idx) => (
        <span key={idx} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
