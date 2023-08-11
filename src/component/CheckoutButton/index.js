import React, { useState } from "react";
import getStripe from "../../utils/stripejs";
import Button from "../Button";
import {
  buttonStyles,
  addToCartButtonStyle,
  addToCartTextStyles,
} from "./checkoutButton.module.css";

const CheckoutButton = ({ priceId = "" }) => {
  const [loading, setLoading] = useState(false);

  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: priceId, quantity: 1 }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/`,
    });

    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };

  return (
    <Button
      btnClasses={buttonStyles}
      loading={loading}
      clickHandler={redirectToCheckout}
    >
      {loading ? (
        "Loading"
      ) : (
        <div className={addToCartButtonStyle}>
          <div className={addToCartTextStyles}>BUY NOW</div>
        </div>
      )}
    </Button>
  );
};

export default CheckoutButton;
