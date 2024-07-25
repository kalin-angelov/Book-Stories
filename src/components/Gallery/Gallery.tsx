import styles from "./Gallery.module.css";

import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className={styles.galleryMainContainer}>
        <h2>Gallery</h2>

        <div className={styles.firstRow}>

            <article>
                <Link to="/cooking" title="Cooking">
                    <figure>
                        <img src="/public/images/cook-cover.png" alt="Cook Books"/>
                    </figure>             
                </Link>  
            </article>

            <article>
                <Link to="/mystery" title="Mystery">
                    <figure>
                        <img src="/public/images/horror-cover.png" alt="Detective Books"/>
                    </figure>             
                </Link>
            </article>

        </div>

        <div className={styles.secondRow}>

            <article><Link to="/fantasy" title="Fantasy">
                    <figure>
                        <img src="/public/images/fantasy-cover.png" alt="Fantasy Books"/>
                    </figure>             
                </Link>
            </article>

            <article>
                <Link to="/comics" title="Comics">
                    <figure>
                        <img src="/public/images/comic-book-cover.png" alt="Comic Books"/>
                    </figure>             
                </Link>
            </article>
        
            <article>
                <Link to="/manga" title="Manga">
                    <figure>
                        <img src="/public/images/manga-cover.png" alt="Manga"/>
                    </figure>             
                </Link>
            </article>

        </div>

    </section>
  )
}

export default Gallery
