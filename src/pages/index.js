import * as React from "react";
import Header from "../component/Header";
import { graphql, useStaticQuery } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

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
const imageStyles = {
  height: "100px",
  objectFit: "contain",
};

const IndexPage = () => {
  const contentData = useStaticQuery(
    graphql`
      query {
        allContentfulProductPage {
          edges {
            node {
              id
              productName
              productDescription {
                raw
              }
              productGallery {
                contentful_id
                filename
                description
                url
              }
            }
          }
        }
      }
    `
  );

  const allContentfulProductPage = contentData.allContentfulProductPage || {};
  const edges = allContentfulProductPage.edges || [];
  const node = edges || [];

  return (
    <>
      <Header />
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Congratulations
          <span style={headingAccentStyles}>
            — you just made a Gatsby site! 🎉🎉🎉
          </span>
        </h1>

        <hr />
        <div>
          <h2>Product list content from Contentful CMS using graphql</h2>
          <ul>
            {node.map((item) => {
              const productGallery = item.node.productGallery || [];

              return (
                <li key={item.node.id}>
                  <div>
                    <strong>{item.node.productName} -</strong>
                    {renderRichText(item.node.productDescription)}
                    <div>
                      {productGallery.map((item) => (
                        <img
                          key={item.contentful_id}
                          src={item.url}
                          alt={item.filename}
                          style={imageStyles}
                        />
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Gatsby Home Page</title>;
