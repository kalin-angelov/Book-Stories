import styles from "./Cart.module.css";

import { HTMLAttributes, useContext, useEffect, useRef, useState } from "react";

import { Context } from "../../../context/Context";

const Cart = ( ) => {
    const { cartOpen, setCartOpen } = useContext(Context);
    const [productsInCart, setProductsInCart] = useState<number>(2);
    const cartRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutsideCart = (event:any) => {
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
        <button className={styles.cart_btn} onClick={onCartClick}>
            <img src="/images/icon-cart.svg" alt="shopping cart icon" />
            {productsInCart != 0 && <span className={styles.num_of_products}>{productsInCart}</span>}
        </button>

        <section className={cartOpen ? styles.cart_container : styles.cart_container_close} ref={cartRef}>
            <h3>Cart</h3>
            <div className={styles.cart_content}>
               
                <p className={styles.message}>Your cart is empty.</p>
                
            </div>
        </section>
    </>
  );
};

export default Cart;