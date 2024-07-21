import styles from "./Cart.module.css";

import { useContext, useEffect, useRef, useState } from "react";

import { Context } from "../../../context/Context";

const Cart = ( ) => {
    const { cartOpen, setCartOpen } = useContext(Context);
    const [productsInCart, setProductsInCart] = useState<number>(2);
    const cartRef = useRef();

    useEffect(() => {
        const handleClickOutsideCart = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setCartOpen(false);
            };
        };

        if (cartOpen) {
            document.addEventListener("mousedown", handleClickOutsideCart)
        };

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideCart);
        };

    },[cartOpen]);

    const onCartClick = () => {
        setCartOpen(!cartOpen);
    };

  return (
    <>
        <button className={styles.cartBtn} onClick={onCartClick}>
            <img src="/images/icon-cart.svg" alt="shopping cart icon" />
            {productsInCart != 0 && <span className={styles.numOfProducts}>{productsInCart}</span>}
        </button>

        <section className={cartOpen ? styles.cartContainer : styles.cartContainerClose} ref={cartRef}>
            <h3>Cart</h3>
            <div className={styles.cartContent}>
               
                <p className={styles.message}>Your cart is empty.</p>
                
            </div>
        </section>
    </>
  );
};

export default Cart;