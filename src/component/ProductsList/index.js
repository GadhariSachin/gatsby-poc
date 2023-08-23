import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProductCard from "../ProductCard";
import {
  productListWrapperStyles,
  titleStyles,
  filterWrapperStyles,
  selectBrandDropdown,
  emptyResultsWrapper,
  productListPageWrapperStyles,
} from "./productList.module.css";
import useProductsData from "./useProductsData";
import Cart from "../Cart";

function ProductsList() {
  const [selectedManufacturer, setSelectedManufacturer] = React.useState("");
  const [selectedRatingFilter, setSelectedRatingFilter] = React.useState("");

  const { productsData } = useProductsData({
    selectedManufacturer,
    selectedRatingFilter,
  });

  return (
    <div className={productListPageWrapperStyles}>
      <div className={productListWrapperStyles}>
        <div className={titleStyles}>
          <h2>Premium Watches</h2>
          <Cart />
        </div>
        <div className={filterWrapperStyles}>
          <div>
            <strong>Brands :</strong>
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
          <div>
            <strong>Rating :</strong>
            <select
              className={selectBrandDropdown}
              onChange={(event) => setSelectedRatingFilter(event.target.value)}
              value={selectedRatingFilter}
            >
              <option value="">All</option>
              <option value="1"> 1 & above</option>
              <option value="2"> 2 & above</option>
              <option value="3"> 3 & above</option>
              <option value="4"> 4 & above</option>
              <option value="5"> 5</option>
            </select>
          </div>
        </div>
        {productsData?.length ? (
          productsData.map((item) => (
            <ProductCard productData={item} key={item.id} />
          ))
        ) : (
          <div className={emptyResultsWrapper}>No results found</div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
