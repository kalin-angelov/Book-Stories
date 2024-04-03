import styles from './style/Header.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [items, setItems] = useState(0);

    const cartClick = () => {
        setItems(items => items += 1)
    };

  return (
    <nav className={styles.headerMainContainer}>
      <Link to='/'>
        <figure>
          <img src='/images/mainLogo.png' alt='logo of books' width={60} height={40}/>
          <figcaption>Book Stories</figcaption>
        </figure>
      </Link>
      <div>
        <button onClick={cartClick}>
          <i className='fa-solid fa-cart-shopping'></i>
        </button>
        <p style={{color: 'white'}}>({items})</p>
      </div>
    </nav>
  )
}

export default Header
