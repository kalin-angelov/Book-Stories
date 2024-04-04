import styles from './style/Product.module.css';
import discountsDb from '../../data/discountsDb.json';
import { discountCalculation } from '../../utils/discountCalculation';

import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {
  const { id } = useParams();
  const info = discountsDb.find(product => String(product._id) == id);

  const [productInfo, setProductInfo] = useState(info);
  
  return (
    <article className={styles.product}>
      <section className={styles.productCover}>
        <figure>
          <img src={productInfo.imgUrl} alt={productInfo.title} />
        </figure>
        <div>
          <h3 >{productInfo.title}</h3>
          <p>{productInfo.summary}</p>
        </div>
      </section>
      <section className={styles.productInformation}>
        <ul>
          <li>Author: {productInfo.author}</li>
          <li>Publisher: {productInfo.publisher}</li>
          <li>Language: {productInfo.language}</li>
          <li>Pages: {productInfo.pages}</li>
          {productInfo.discount ? 
            <li>
              Price: <span>${productInfo.regularPrice}.00</span> - <span>${discountCalculation(productInfo.regularPrice, productInfo.discount)}</span>
            </li>
            : 
            <li>Price: ${productInfo.regularPrice}.00</li>
          }
        </ul>
      </section>
      <section className={styles.priceSection}>
        
          <button>Add to cart</button>
      </section>
    </article>
  );
};

export default Product;