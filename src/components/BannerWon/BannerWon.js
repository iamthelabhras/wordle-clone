import React from "react";

import Banner from "../Banner";

function BannerWon({numOfGuesses, action, actionText, actionStyles}) {
  return ( 
    <Banner status="happy" action={action} actionText={actionText} actionStyles={actionStyles}>
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
