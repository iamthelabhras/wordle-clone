import React from "react";

import { range } from "../../utils";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers.js";

function AnswerCheck ({checkedLetter, checkedStatus}) {
  const statusClasses = checkedStatus
    ? `cell ${checkedStatus}`
    : `cell`;
  return (
    <span
      className={statusClasses}
    >
      {checkedLetter}
    </span>
  )
}

function Guess({letters, answer}) {
  const checkedGuess = checkGuess(letters,answer);
  return (
  <>
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((letter, index) => (
          <AnswerCheck
            key={index}
            checkedLetter={checkedGuess ? checkedGuess[letter].letter : undefined}
            checkedStatus={checkedGuess ? checkedGuess[letter].status : undefined}
          />
        )
      )}
    </p>
  </>
  )
}

export default Guess;
