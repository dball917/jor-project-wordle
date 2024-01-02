import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  let intialGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(() => "");
  const [guesses, setGuesses] = React.useState(intialGuesses);
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameState, setGameState] = React.useState(undefined);

  function onGuess(guess) {
    if (answer === guess) {
      setGameState("happy");
    } else if (guessCount == NUM_OF_GUESSES_ALLOWED - 1) {
      setGameState("sad");
    }

    const nextGuesses = [...guesses];
    nextGuesses[guessCount] = guess;
    setGuesses(nextGuesses);
    setGuessCount(guessCount + 1);
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      {gameState ? (
        <Banner state={gameState} answer={answer} guessCount={guessCount} />
      ) : (
        <GuessInput onGuess={onGuess} />
      )}
    </>
  );
}

export default Game;
