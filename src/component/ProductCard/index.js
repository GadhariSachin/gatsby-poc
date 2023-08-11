import React from "react";
import ProductRating from "../ProductRatings";
import ProductImageGallery from "../ProductGallery";
import Button from "../Button";
import {
  productCardWrapperStyles,
  productManufacturerStyles,
  productTitleStyles,
  productPriceStyles,
  priceLabelStyles,
  buttonStyles,
  addToCartButtonStyle,
  addToCartTextStyles,
} from "./productCard.module.css";

function ProductCard({ productData }) {
  const {
    productTitle = "",
    productPrice = 0,
    productRating = 0,
    productManufacturer = "",
    productInventory = 0,
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

      {/* <div className={productInventoryStyles}>{productInventory}</div> */}

      {/* add to casrt button */}
      <Button btnClasses={buttonStyles} onClick={() => {}}>
        <div className={addToCartButtonStyle}>
          <div className={addToCartTextStyles}>Add to cart</div>
        </div>
      </Button>
    </div>
  );
}

export default ProductCard;
