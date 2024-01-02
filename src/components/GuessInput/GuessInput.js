import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Guess", guess);
    setGuess("");
  }

  return (
    <form class="guess-input-wrapper" onSubmit={(evt) => handleSubmit(evt)}>
      <label htmlFor="guess-input">Enter Guess</label>
      <input
        id="guess-input"
        pattern="[A-Za-z]{5}"
        maxLength="5"
        value={guess}
        onInput={(evt) => setGuess(evt.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
