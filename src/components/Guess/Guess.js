import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const status = guess.trim()
    ? checkGuess(guess, answer)
    : range(5).map(() => ({
        letter: " ",
        status: "",
      }));

  return (
    <p className="guess">
      {status.map((letterStatus, idx) => (
        <span key={idx} className={`cell ${letterStatus.status}`}>
          {letterStatus.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
