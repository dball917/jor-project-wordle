import React from "react";

function GuessInput({ onGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setGuess("");
    onGuess(guess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(evt) => handleSubmit(evt)}>
      <label htmlFor="guess-input">Enter Guess</label>
      <input
        required
        id="guess-input"
        pattern="[A-Za-z]{5}"
        minLength={5}
        maxLength={5}
        value={guess}
        onInput={(evt) => setGuess(evt.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
