import * as React from "react";
import Header from "../component/Header";

const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
};
const headingAccentStyles = {
  color: "#663399",
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          About Page
          <span style={headingAccentStyles}>— just an another page 🎉🎉🎉</span>
        </h1>
      </main>
    </>
  );
};

export default AboutPage;

export const Head = () => <title>Gatsby | About Page</title>;
