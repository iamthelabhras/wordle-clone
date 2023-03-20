import React from "react";

function Banner({status, action, actionText, actionStyles, children}) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && 
        <button className={actionStyles} onClick={action}>
          {actionText}
        </button>}
    </div>
  );
}

export default Banner;
