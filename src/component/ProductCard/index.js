import React from "react";
import ProductRating from "../ProductRatings";
import ProductImageGallery from "../ProductGallery";
import {
  productCardWrapperStyles,
  productManufacturerStyles,
  productTitleStyles,
  productPriceStyles,
  priceLabelStyles,
} from "./productCard.module.css";
import CheckoutButton from "../CheckoutButton";

function ProductCard({ productData }) {
  const {
    productTitle = "",
    productPrice = 0,
    productRating = 0,
    productManufacturer = "",
    priceId = "",
    productGallery = [],
  } = productData;

  return (
    <div className={productCardWrapperStyles}>
      {/* product image gallery */}
      <ProductImageGallery productGallery={productGallery} />

      <div className={productManufacturerStyles}>{productManufacturer}</div>

      <div className={productTitleStyles}>{productTitle}</div>

      {/* product rating */}
      <ProductRating rating={productRating} />

      <div className={productPriceStyles}>
        <span className={priceLabelStyles}>M.R.P. :</span>
        <span>&#8377;</span>
        <span>{productPrice}</span>
      </div>

      {/* add to casrt button */}
      <CheckoutButton priceId={priceId} />
    </div>
  );
}

export default ProductCard;
