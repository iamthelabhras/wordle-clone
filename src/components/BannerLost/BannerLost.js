import React from "react";
import Banner from "../Banner";

function BannerLost({answer, action, actionText, actionStyles}) {
  return ( 
    <Banner status="sad" action={action} actionText={actionText} actionStyles={actionStyles}>
      <p>
        Sorry!  The correct answer was: 
        {' '}
        <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default BannerLost;
