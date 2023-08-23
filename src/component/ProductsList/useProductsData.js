import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function useProductsData({ selectedManufacturer, selectedRatingFilter }) {
  const [productsData, setProductsData] = React.useState([]);

  const contentData = useStaticQuery(
    graphql`
      query {
        allContentfulProduct {
          nodes {
            id
            productTitle
            productDescription {
              productDescription
            }
            productPrice
            productRating
            productManufacturer
            productInventory
            productGallery {
              id
              url
              filename
            }
            priceId
          }
          totalCount
        }
      }
    `
  );

  React.useEffect(() => {
    const productsListArray = contentData.allContentfulProduct || {};
    const nodes = productsListArray.nodes || [];

    let filteredProductsData = nodes;

    if (selectedManufacturer) {
      filteredProductsData = filteredProductsData.filter(
        (item) => item.productManufacturer === selectedManufacturer
      );
    }

    if (selectedRatingFilter) {
      filteredProductsData = filteredProductsData.filter(
        (item) => item.productRating >= selectedRatingFilter
      );
    }

    if (selectedManufacturer || selectedRatingFilter) {
      setProductsData(filteredProductsData);
    } else {
      setProductsData(nodes);
    }
  }, [selectedManufacturer, selectedRatingFilter, contentData]);

  return { productsData };
}

export default useProductsData;
