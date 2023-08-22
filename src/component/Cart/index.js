import React from "react";
import {
  cartIconWrapperStyles,
  cartIconstyles,
  modalWrapperStyles,
  modalBody,
  modalHeader,
  modalFooter,
  modalHeadeCloseIcon,
  modalHeaderText,
  removeButtonStyles,
  checkoutButtonStyles,
  cartItem,
  cartItemImage,
  cartItemTitle,
  cartItemPrice,
  cartItemQuantity,
  cartItemDetails,
} from "./cart.module.css";
import CartIcon from "../svg/CartIcon";
import CartCount from "./CartCount";
import getStripe from "../../utils/stripejs";
import { useShoppingCart } from "use-shopping-cart";
import ProductImageGallery from "../ProductGallery";

function Cart() {
  const [showModal, setShowModal] = React.useState(false);

  const { totalPrice, cartCount, cartDetails, clearCart } = useShoppingCart();

  console.log({ cartDetails });

  const checkoutClickHandler = async (event) => {
    event.preventDefault();

    const stripe = await getStripe();

    let lineItems = Object.values(cartDetails).map((item) => ({
      price: item.id,
      quantity: item.quantity,
    }));

    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/`,
    });

    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <>
      <div
        className={cartIconWrapperStyles}
        onClick={() => setShowModal(!showModal)}
      >
        <div className={cartIconstyles}>
          <CartIcon />
        </div>
        <CartCount />
      </div>
      {showModal && (
        <div className={modalWrapperStyles}>
          <div className={modalHeader}>
            <div className={modalHeaderText}>Cart</div>
            <div
              className={modalHeadeCloseIcon}
              onClick={() => setShowModal(!showModal)}
            >
              X
            </div>
          </div>
          <div className={modalBody}>
            {Object.keys(cartDetails).length ? (
              Object.values(cartDetails).map((item) => (
                <div className={cartItem} key={item.id}>
                  <div className={cartItemImage}>
                    <img src={item.image.url} alt={item.name} height="100px" />
                  </div>
                  <div className={cartItemDetails}>
                    <div className={cartItemTitle}>{item.name}</div>
                    <div className={cartItemQuantity}>
                      Quantity - <strong>{item.quantity}</strong>
                    </div>
                    <div className={cartItemPrice}>
                      Price - <strong>{item.value}</strong>{" "}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Your cart is empty!!</div>
            )}
          </div>
          <div className={modalFooter}>
            <button
              className={checkoutButtonStyles}
              onClick={checkoutClickHandler}
            >
              Checkout
            </button>
            <button className={removeButtonStyles} onClick={clearCart}>
              Remove All
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
