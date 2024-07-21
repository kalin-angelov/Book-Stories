import styles from "./Home.module.css";

import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <main className={styles.main}>
            <Gallery />
        </main>
    );
};

export default Home;
