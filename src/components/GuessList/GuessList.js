import React from "react";
import Guess from "../Guess/Guess";

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, idx) => (
        <Guess key={idx} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
