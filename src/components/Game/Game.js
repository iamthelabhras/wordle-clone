import React from 'react';

import { sample } from '../../utils';
// NOTE: The # in #_LETTER_WORDS must match the NUM_OF_LETTERS_ALLOWED constant for this app to work properly!
// NUM_OF_LETTERS_ALLOWED constant can be found in /src/constants.js.
// #_LETTER_WORDS array(s) can be found in /src/data.js.
import { FIVE_LETTER_WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from '../GuessInput';
import GuessTracker from '../GuessTracker';
import BannerWon from '../BannerWon';
import BannerLost from '../BannerLost';

// Pick a random word on every pageload.
const answer = sample(FIVE_LETTER_WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [trackedGuesses, setTrackedGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmittedGuess(guess) {
    const updatedTrackedGuesses= [...trackedGuesses, guess];
    setTrackedGuesses(updatedTrackedGuesses);

    if (guess.toUpperCase() === answer) { 
      setGameStatus('won');
    }
    else if (updatedTrackedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

  }
  
  function newGame() { 
    setTrackedGuesses([]);
    setGameStatus('running');
  }

  return (
    <>
      { gameStatus === 'running' && ( 
          <p>
            You have {NUM_OF_GUESSES_ALLOWED-trackedGuesses.length} guesses left.
          </p>
        ) 
      }

      <GuessTracker 
        trackedGuesses={trackedGuesses} 
        answer={answer}
      />
      <GuessInput 
        handleSubmittedGuess={handleSubmittedGuess} 
        gameStatus={gameStatus}
      />
      { gameStatus === 'won' && ( 
          <BannerWon 
            numOfGuesses={trackedGuesses.length}
            action={newGame}
            actionText={`Click here to start a new game!`}
            actionStyles={`new-game`}
          /> 
        )
      }
      { gameStatus === 'lost' && ( 
          <BannerLost 
            answer={answer} 
            action={newGame}
            actionText={`Click here to start a new game!`}
            actionStyles={`new-game`}
          />
        )
      }
    </>
  );
}

export default Game;
