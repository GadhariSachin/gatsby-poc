import React from "react";

function Button({ btnClasses = "", onclick = () => {}, children }) {
  return (
    <button onClick={onclick} className={btnClasses}>
      {children}
    </button>
  );
}

export default Button;
