import styles from './style/Gallery.module.css';

import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <section className={styles.galleryMainContainer}>
        <h2>Gallery</h2>
        <div className={styles.firstRow}>
            <article className={styles.firstRowArticle}> 
                <Link to='/selfImprove' title='Self Improving'>
                    <figure>
                        <img src='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2021-12/shiromani-kant-mo3fotg62ao-unsplash.jpg?itok=V3IJaoEw' alt='Self Improving Books'/>
                    </figure>
                </Link>
            </article>
            <article className={styles.firstRowArticle}> 
                <Link to='/cooking' title='Cooking'>
                    <figure>
                        <img src='https://static01.nyt.com/images/2023/12/12/dining/11TOP-COOKBOOKS-Header/11TOP-COOKBOOKS-Header-videoSixteenByNineJumbo1600.jpg' alt='Cook Books'/>
                    </figure>             
                </Link>
                
            </article>
            <article className={styles.firstRowArticle}> 
                <Link to='/mystery' title='Mystery'>
                    <figure>
                        <img src='https://www.novelsuspects.com/wp-content/uploads/2021/07/Our-Favorite-Police-Procedural-Novels-This-Year.png' alt='Detective Books'/>
                    </figure>             
                </Link>
                
            </article>
        </div>
        <div className={styles.secondRow}>
            <article className={styles.secondRowArticle}>
                <Link to='/fantasy' title='Fantasy'>
                    <figure>
                        <img src='https://jamestkelly.com/wp-content/uploads/2020/05/25bestfantasybooks.jpg' alt='Fantasy Books'/>
                    </figure>             
                </Link>
                
            </article>
            <article className={styles.secondRowArticle}>
                <Link to='/comics' title='Comics'>
                    <figure>
                        <img src='https://assets.delawaretoday.com/2023/07/brett-breeding.jpg' alt='Comic Books'/>
                    </figure>             
                </Link>
                
            </article>
            <article className={styles.secondRowArticle}>
                <Link to='/manga' title='Manga'>
                    <figure>
                        <img src='https://www.taxidrivers.it/wp-content/uploads/2023/01/shonen_jump_by_dinocozero_dcewzjw-pre.jpg' alt='Manga'/>
                    </figure>             
                </Link>
                
            </article>
        </div>
    </section>
  );
};

export default Gallery;
