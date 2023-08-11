import * as React from "react";
import Header from "../component/Header";
import ProductsList from "../component/ProductsList";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <ProductsList />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Store</title>;
