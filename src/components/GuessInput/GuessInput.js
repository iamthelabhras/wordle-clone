import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessInput({handleSubmittedGuess, gameStatus}) {

    const [guess, setGuess] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // This function "backstops" minLength quirkiness that will allow a form to submit ...
        // ... it's input input with fewer than NUM_OF_LETTERS_ALLOWED characters.
        // Not (strictly) necessary if a pattern attribute is set on input element.
        if (guess.length < NUM_OF_LETTERS_ALLOWED ) {     
            window.alert(`Please input an guess with exactly ${NUM_OF_LETTERS_ALLOWED} letters.`);
            return;
        }
        // This function is set in /src/components/Game.
        handleSubmittedGuess(guess);
        setGuess('');
    }

    return( 
        <form 
            className="guess-input-wrapper"
            onSubmit={handleSubmit}
        >
        <label 
            htmlFor="guess-input"
        >
            Enter guess:
        </label>
        <input 
            required
            disabled={gameStatus !== 'running'}
            type="text" 
            minLength={NUM_OF_LETTERS_ALLOWED}
            // Tricky to implement this in JSX.  Couldn't figure out how!
            // pattern={`[a-zA-z]${NUM_OF_LETTERS_ALLOWED}`}
            maxLength={NUM_OF_LETTERS_ALLOWED}
            // Tricky to implement this in JSX.  Couldn't figure out how!
            // title={`Please input a guess with exactly ${NUM_OF_LETTERS_ALLOWED} characters`}
            id="guess-input" 
            value={guess}
            onChange={(event) => {
                    const newGuess = event.target.value.toUpperCase();                
                    setGuess(newGuess);
                }
            }
        />
        </form>
    );
}

export default GuessInput;
