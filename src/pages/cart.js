import * as React from "react";
import Header from "../component/Header";
import getStripe from "../utils/stripejs";
import { useShoppingCart } from "use-shopping-cart";

const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const AboutPage = () => {
  const { totalPrice, cartCount, cartDetails, clearCart } = useShoppingCart();

  const checkoutClickHandler = async (event) => {
    event.preventDefault();

    const stripe = await getStripe();

    let lineItems = Object.values(cartDetails).map((item) => ({
      price: item.id,
      quantity: item.quantity,
    }));

    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/`,
    });

    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <main style={pageStyles}>
        <div>
          <div>
            <div>Total Price - {totalPrice}</div>
            <div>Cart count - {cartCount}</div>
          </div>
          <button onClick={checkoutClickHandler}>Checkout</button>
          <button onClick={clearCart}>clear cart</button>
        </div>
      </main>
    </>
  );
};

export default AboutPage;

export const Head = () => <title>Gatsby | About Page</title>;
