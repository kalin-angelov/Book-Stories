import styles from "./GoUpBtn.module.css";

import { useEffect, useState } from "react";

const GoUpBtn = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY > 500) ?
                setShowBtn(true)
            :
                setShowBtn(false);
        };

        window.addEventListener("scroll", handleScroll);

        return ()=> {
            window.removeEventListener("scroll", handleScroll);
        };

    },[])

    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return (
        <button
            style={{display: showBtn ? "block" : "none"}}
            className={styles.goUpBtn}
            onClick={moveToTop}
        >
            <i className="fa-solid fa-circle-chevron-up"></i>
        </button>
    );
};

export default GoUpBtn;
