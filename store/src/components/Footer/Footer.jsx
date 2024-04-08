import styles from './style/Footer.module.css';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  const [showDropDownContacts, setShowDropDownContacts] = useState(true);
  const [showDropDownAbout, setShowDropDownAbout] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (windowWidth >= 768) {
      setShowDropDownAbout(true);
      setShowDropDownContacts(true);
    }
  },[]);
  
  const toggle = (e) => {
    if (windowWidth >= 425) {
      e.target.id === 'contacts' ? 
      setShowDropDownContacts(!showDropDownContacts)
    :
      setShowDropDownAbout(!showDropDownAbout)
    }
  };


  return (
    <footer className={styles.footerMainContainer}>
      <section className={styles.socialMediaLinks}>
        <h4>Book Stories</h4>
        <Link to='https://www.facebook.com/' target='_blank'>
            <i className='fa-brands fa-facebook'></i>
        </Link>
        <Link to='https://www.instagram.com/' target='_blank'>
            <i className='fa-brands fa-instagram'></i>
        </Link>
        <Link to='https://www.youtube.com/' target='_blank'>
            <i className='fa-brands fa-youtube'></i>
        </Link>
        <Link to='https://www.tiktok.com/' target='_blank'>
            <i className='fa-brands fa-tiktok'></i>
        </Link>
      </section>
      <section className={styles.siteInformation}>
            <article>
              <p id='contacts' onClick={(e) => toggle(e)}>Contacts</p>
              {
                showDropDownContacts && 
                <ul>
                  <li>Location</li>
                  <li>Phone: 001 122 3344</li>
                  <li>Mail: BookStories@gmail.com</li>
                </ul>
              }
              
            </article>
            <article>
              <p id='about' onClick={(e) => toggle(e)}>About Us</p>
              {
                showDropDownAbout && 
                <ul>
                  <li>Work Time</li>
                  <li>About</li>
                  <li>Team</li>
                </ul>
              }
            </article>
      </section>
    </footer>
  );
};

export default Footer;