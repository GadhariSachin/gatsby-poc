import * as React from "react";
import Header from "../component/Header";
import ProductsList from "../component/ProductsList";
import { CartProvider } from "use-shopping-cart";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main style={pageStyles}>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.GATSBY_STRIPE_SECRET_KEY}
          successUrl="stripe.com"
          cancelUrl="twitter.com/dayhaysoos"
          currency="USD"
          allowedCountries={["US", "GB", "CA"]}
          billingAddressCollection={true}
        >
          <ProductsList />
        </CartProvider>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Store</title>;
