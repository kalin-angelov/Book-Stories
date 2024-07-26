import styles from "./Product.module.css";

import { Link } from "react-router-dom";

const Product = () => {
  return (
    <main className={styles.product}>

        <figure >
            <img src="/public/images/fantasy-book-1.png" alt="Book cover" />
        </figure>


        <section className={styles.product_details}>

            <h4 className={styles.title}>Andie FnDaak</h4>
            <Link className={styles.author} to="/author_bio">Christian Silver</Link>
            <ul className={styles.price}>
                <li>8.00 $</li>
                <li>In stock: <span>5</span></li>
            </ul>

            <div className={styles.buttons_container}>
                <div className={styles.quantity_btn}>
                    <img src="/images/icon-minus.svg" alt="minus" />
                    0
                    <img src="/images/icon-plus.svg" alt="plus"  />
                </div>
                <button className={styles.add_cart_btn}>
                    <img src="/images/icon-cart.svg" alt="cart icon" />
                    Add to cart
                </button>
            </div>

            <ul className={styles.description_list}> 
                <li>Pages: <span>350</span></li>
                <li>Language: <span>English</span></li>
                <li>Genre: <span>Fantasy</span></li>
            </ul>

            <p className={styles.summary}>
                In the magical realm of Eldoria, the balance of the world teeters on the brink of collapse. The once-peaceful land is plagued by the ominous presence of Zauron, a fearsome dragon whose malevolent power threatens to engulf the entire kingdom in darkness. Prophecies speak of a hero destined to restore harmony, and that hero is Andie FnDaak.

                Andie, a young and unassuming villager, discovers that she possesses a rare and ancient magic, long forgotten by the people of Eldoria. Guided by the enigmatic wizard Eldric and joined by a band of loyal companions—including Thalia, a fierce warrior; Liora, a skilled archer; and Torrin, a resourceful rogue—Andie embarks on a perilous journey to confront Zauron.

                Throughout her quest, Andie faces numerous trials that test her courage, wisdom, and strength. She must navigate treacherous landscapes, decipher cryptic riddles, and fend off the dragon's minions. Along the way, she uncovers secrets about her own lineage and the true nature of her magical abilities.

                As the final battle looms, Andie and her friends must infiltrate Zauron's lair, a towering fortress of fire and brimstone. In a climactic showdown, Andie confronts the dragon, wielding her newfound powers to challenge Zauron's might. The fate of Eldoria hangs in the balance as Andie fights to save her world.

                "Andie FnDaak" is a gripping tale of bravery, friendship, and self-discovery. Christial Silver weaves a rich tapestry of fantasy, filled with vibrant characters, thrilling adventures, and a message of hope and resilience. Andie's journey from humble beginnings to heroic legend is an inspiring reminder that even the most unlikely of heroes can change the world.
            </p>

        </section>

    </main>
  );
};

export default Product;
