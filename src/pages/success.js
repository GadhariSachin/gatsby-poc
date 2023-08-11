import * as React from "react";
import GreenTickIcon from "../component/svg/GreenTickIcon";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px",
};

const successContainerWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

const successTextStyle = {
  color: "green",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const backToLinkStyle = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "20px",
  backgroundColor: "#ffb238",
  padding: "10px 20px",
  borderRadius: "5px",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const SuccessPage = () => {
  return (
    <>
      <main style={pageStyles}>
        <div style={successContainerWrapper}>
          <GreenTickIcon />
          <h1 style={successTextStyle}>Payment success!!</h1>
          <div style={backToLinkStyle}>
            <Link to="/" style={linkStyle}>
              Go back to home page
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SuccessPage;

export const Head = () => <title>Purchase success!!</title>;
