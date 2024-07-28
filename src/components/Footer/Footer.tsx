import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer_main_container}>

            <section className={styles.social_media_links}>

                <h3>Book Stories</h3>

                <Link to="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                </Link>

                <Link to="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </Link>

                <Link to="https://www.youtube.com/" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                </Link>
                
                <Link to="https://www.tiktok.com/" target="_blank">
                    <i className="fa-brands fa-tiktok"></i>
                </Link>

            </section>

            <div className={styles.site_information}>

                <article>
                    <h4>Contacts</h4>
                    <ul>
                        <li>Location: <span></span></li>
                        <li>Phone: <span>001 122 3344</span></li>
                        <li>Mail: <span>bookstories@gmail.com</span></li>
                    </ul>
                </article>

                <article>
                    <h4>About Us</h4>
                    <ul>
                        <li>Work Time</li>
                        <li>About</li>
                        <li>Team</li>
                    </ul>
                </article>

            </div>

        </footer>
    );
};

export default Footer;
