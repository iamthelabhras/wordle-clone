import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess";

function GuessTracker({trackedGuesses, answer}) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map(letter =>
          <Guess key={letter} letters={trackedGuesses[letter]} answer={answer} />
        )}
      </div>
    </>
  );
}

export default GuessTracker;
