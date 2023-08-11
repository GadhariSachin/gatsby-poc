import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProductCard from "../ProductCard";
import {
  productListWrapperStyles,
  titleStyles,
  filterWrapperStyles,
  selectBrandDropdown,
} from "./productList.module.css";

function ProductsList() {
  const [selectedManufacturer, setSelectedManufacturer] = React.useState("");

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

  const productsListArray = contentData.allContentfulProduct || {};
  const nodes = productsListArray.nodes || [];
  // const totalProducts = productsListArray.totalCount || 0;

  return (
    <>
      <div className={productListWrapperStyles}>
        <div className={titleStyles}>
          <h2>Premium Watches </h2>
        </div>
        <div className={filterWrapperStyles}>
          <strong>Filter by brands :</strong>
          <select
            className={selectBrandDropdown}
            onChange={(event) => setSelectedManufacturer(event.target.value)}
            value={selectedManufacturer}
          >
            <option value="">All</option>
            <option value="Sonata">Sonata</option>
            <option value="Titan">Titan</option>
            <option value="Casio">Casio</option>
          </select>
        </div>
        {nodes.map((item) => (
          <ProductCard productData={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
