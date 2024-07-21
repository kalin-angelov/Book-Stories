import styles from "./ProfileMenu.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const ProfileMenu = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const profRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleHover = (event:any) => {
            if (profRef.current?.contains(event.target)) {
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

            <div className={styles.profileIcon} >
                <i className="fa-regular fa-user"></i>
            </div>

            

            <ul className={styles.userMenu} style={{display: showMenu ? "block" : "none"}}>
                <li><Link to={"/entry"} state={"sing_up"}>Sign Up</Link></li>
                <li><Link to={"/entry"} state={"sing_in"}>Sign In</Link></li>
            </ul>

        </div>
    )
};

export default ProfileMenu;
