import styles from "./styles/Footer.module.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerMainContainer}>
      <section className={styles.socialMediaLinks}>
        <h4>Book Stories</h4>
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
      <section className={styles.siteInformation}>
            <article>
                <p>Contacts</p>
                <ul>
                    <li>Location</li>
                    <li>Phone: 001 122 3344</li>
                    <li>Mail: BookStories@gmail.com</li>
                </ul>
            </article>
            <article>
                <p>About Us</p>

                <ul>
                    <li>Work Time</li>
                    <li>About</li>
                    <li>Team</li>
                </ul>
            </article>
      </section>
    </footer>
  )
}

export default Footer
