import React from "react";

import {
  productGalleryStyles,
  productImageStyles,
} from "./productGallery.module.css";

function ProductImageGallery({ productGallery = [] }) {
  if (!productGallery.length) return null;

  return (
    <div className={productGalleryStyles}>
      {/* {productGallery.map((item) => ( */}
      <img
        className={productImageStyles}
        src={productGallery[0].url}
        alt={productGallery[0].filename}
        key={productGallery[0].id}
      />
      {/* ))} */}
    </div>
  );
}

export default ProductImageGallery;
