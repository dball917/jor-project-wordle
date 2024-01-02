import React from "react";
import Guess from "../Guess/Guess";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, idx) => (
        <Guess key={idx} guess={guess} />
      ))}
    </div>
  );
}

export default GuessList;
