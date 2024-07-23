import styles from "./AuthorBio.module.css";


const AuthorBio = () => {
  return (
    <article className={styles.author}>

        <h3 className={styles.author_name}>Christie Golden</h3>

        <figure className={styles.author_portrait}>
            <img src="https://d28hgpri8am2if.cloudfront.net/author_images/2925_1102485.jpg" alt="Author img" />
        </figure>

        <h4>About the author:</h4>

        <p className={styles.author_bio}>
            Golden has written many novels and several short stories in the fields of science fiction,
            fantasy and horror. Among her many projects are over a dozen Star Trek novels, 
            over a dozen for gaming giant Blizzard's World of Warcraft and StarCraft novels,
            and three books for the now finished Fate of the Jedi series of Star Wars novels.
        </p>

        <h5>Books:</h5>

        <div className={styles.author_books}>

            <div className={styles.book}>
                <figure>
                    <img src="https://m.media-amazon.com/images/I/81-4QV-KrLL._AC_UF894,1000_QL80_.jpg" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="https://m.media-amazon.com/images/I/81J33rJqn6L._AC_UF894,1000_QL80_.jpg" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="https://m.media-amazon.com/images/I/51eQUJZ92GL._AC_UF1000,1000_QL80_.jpg" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="https://m.media-amazon.com/images/I/81x7UlKUj1L._AC_UF1000,1000_QL80_.jpg" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="https://m.media-amazon.com/images/I/81PABS6r+iL._AC_UF1000,1000_QL80_.jpg" alt="Book img" />
                </figure>
            </div>

            <div className={styles.book}>
                <figure>
                    <img src="https://m.media-amazon.com/images/I/71KHfujRdvL._AC_UF1000,1000_QL80_.jpg" alt="Book img" />
                </figure>
            </div>
           
        </div>

    </article>
  );
};

export default AuthorBio;
