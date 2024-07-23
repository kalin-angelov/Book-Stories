import styles from "./Home.module.css";

import Gallery from "../Gallery/Gallery";
import AuthorsList from "../Authors/AuthorsList/AuthorsList";

const Home = () => {
    return (
        <main className={styles.main}>
            <Gallery />
            <AuthorsList />
        </main>
    );
};

export default Home;
