import styles from './style/Discounts.module.css';
import data from '../../data/discountsDb.json';

import { Link } from 'react-router-dom';

import { discountCalculation } from '../../utils/discountCalculation';

const Discounts = () => {
    
  return (
    <section className={styles.discountMainContainer}>
        <h2>This month discounts</h2>
        <div className={styles.discounts}>
            {data.map(product => 
                <article key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <figure>
                            <img src={product.imgUrl} alt='Discount product' />
                        </figure>
                        <h3 className={styles.productName}>{product.title}</h3>
                        <p className={styles.productPrice}>
                            <span>
                                ${(product.regularPrice).toFixed(2)}
                            </span> - 
                            <span>
                                ${discountCalculation(product.regularPrice, product.discount)}
                            </span>
                        </p>
                    </Link>
                </article>) 
            }
        </div>
    </section>
  );
};

export default Discounts;
