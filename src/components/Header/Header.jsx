import styles from "./styles/Header.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import Navigation from "../Navigation/Navigation";
import Cart from "../Cart/Cart";

const Header = () => {

    return (
        <header>
            <div className={styles.headerSectionOne}>

                <Navigation />

                <Link className={styles.title} to="/" >Book Stories</Link>

            </div>
            
            <div className={styles.headerSectionTwo}>

                <Cart />


            </div>
        </header>
        )
}

export default Header
