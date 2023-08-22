import * as React from "react";
const CartIcon = (props) => (
  <svg
    fill="#000000"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="20px"
    height="20px"
    viewBox="0 0 20 20"
    enableBackground="new 0 0 20 20"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M17,14H4c-0.6,0-1-0.4-1-1V2H0V0h4c0.6,0,1,0.4,1,1v11h11.2l1.5-6H7V4h12c0.6,0,1.1,0.6,1,1.2l-2,8C17.9,13.7,17.5,14,17,14 z" />
    <circle cx={5} cy={18} r={2} />
    <circle cx={16} cy={18} r={2} />
  </svg>
);
export default CartIcon;
