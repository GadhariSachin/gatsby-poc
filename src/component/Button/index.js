import React from "react";

function Button({
  btnClasses = "",
  clickHandler = () => {},
  loading = false,
  children,
}) {
  return (
    <button onClick={clickHandler} className={btnClasses} disabled={loading}>
      {children}
    </button>
  );
}

export default Button;
