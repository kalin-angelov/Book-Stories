import styles from "./ProfileMenu.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ProfileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const profRef = useRef();

    useEffect(() => {
        const handleHover = (event) => {
            if (profRef.current.contains(event.target)) {
                setShowMenu(true);
            } else {
                setShowMenu(false)
            }
        };

        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mouseover", handleHover);
        };

    },[setShowMenu]);

    return (
        <div className={styles.profileMenuContainer} ref={profRef}>

            <figure className={styles.profileIcon} >
                <img src="/images/userPic.png" alt="user image" />
            </figure>

            <ul className={styles.userMenu} style={{display: showMenu ? "block" : "none"}}>
                <li><Link to={"/entry"} state={"sing_up"}>Sign Up</Link></li>
                <li><Link to={"/entry"} state={"sing_in"}>Sign In</Link></li>
            </ul>

        </div>
    )
};

export default ProfileMenu;
