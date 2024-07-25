import styles from "./AuthorBio.module.css";


const AuthorBio = () => {
  return (
    <article className={styles.author}>

        <h3 className={styles.author_name}>Christian Silver</h3>

        <figure className={styles.author_portrait}>
            <img src="/public/images/fantasy-author-1.png" alt="Author img" />
        </figure>

        <h4>About the author:</h4>

        <p className={styles.author_bio}>
            Christian Silver is a bestselling fantasy author known for weaving intricate worlds filled with magic, mystery, and unforgettable characters.
            With a passion for storytelling that began in her childhood, Christian has crafted a series of novels that transport readers to realms where anything is possible and adventure awaits at every turn
        </p>

        <h5>Books:</h5>

        <div className={styles.author_books}>

            <div className={styles.book}>
                <figure>
                    <img src="/public/images/fantasy-book-1.png" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="/public/images/fantasy-book-2.png" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="/public/images/fantasy-book-3.png" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="/public/images/fantasy-book-4.png" alt="Book img" />
                </figure>
            </div>
            
        </div>

    </article>
  );
};

export default AuthorBio;
