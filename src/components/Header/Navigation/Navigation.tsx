import styles from "./Navigation.module.css";

import { useEffect, useRef, useState, useContext } from "react";
import { GlobalContext, GlobalContextType } from "../../../context/Context";

const Navigation = () => {
    const menuRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { setCartOpen } = useContext<GlobalContextType>(GlobalContext);

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            };
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    },[menuOpen]);

    const onMenuClick = () => {
        setMenuOpen(!menuOpen);
        setCartOpen(false);
    };

    return (
        <>
            <button className={styles.burgerBtn} onClick={onMenuClick}>
                <img src="/images/icon-menu.svg" alt="menu icon" />
            </button>

            <aside className={menuOpen ? styles.burgerMenu : styles.burgerMenuClose} >
                
                <nav className={styles.navigationBurger} ref={menuRef}>

                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <img src="/images/icon-close.svg" alt="X btn" />
                    </button>

                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                        <li>Four</li>
                        <li>Five</li>
                    </ul>
                </nav>
                
            </aside>
        </>
    )
}

export default Navigation;
