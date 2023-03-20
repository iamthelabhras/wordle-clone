import React from "react";

import Banner from "../Banner";

function BannerWon({numOfGuesses}) {
  return ( 
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> 
        {' '}
        You won the game in 
        {' '}
        <strong>
          {numOfGuesses === 1 
            ? '1 guesses'
            : `${numOfGuesses} guesses`
          }
        </strong>
        .
      </p>
    </Banner>
  );
}

export default BannerWon;
