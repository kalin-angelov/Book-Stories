import styles from "./AuthorList.module.css";

import { useNavigate } from "react-router-dom";

const AuthorsList = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate("/author_bio");
    };

    return (
        <section className={styles.author_list_container}>

            <h2>Authors</h2>

            <div className={styles.list}>

                <figure onClick={navigateTo}>
                    <img src="/public/images/comic-book-author-1.png" alt="Author img" />
                    <figcaption>Ken Adams</figcaption>
                </figure>

                <figure onClick={navigateTo}>
                    <img src="/public/images/cook-author-1.png" alt="Author img" />
                    <figcaption>Sara West</figcaption>
                </figure>

                <figure onClick={navigateTo}>
                    <img src="/public/images/criminal-roman-author-1.png" alt="Author img" />
                    <figcaption>K.K. Tomas</figcaption>
                </figure>

                <figure onClick={navigateTo}>
                    <img src="/public/images/criminal-author-2.png" alt="Author img" />
                    <figcaption>Megan Mizumo</figcaption>
                </figure>

                <figure onClick={navigateTo}>
                    <img src="/public/images/manga-author-1.png" alt="Author img" />
                    <figcaption>Sakai Oda</figcaption>
                </figure>

                <figure onClick={navigateTo}>
                    <img src="/public/images/fantasy-author-1.png" alt="Author img" />
                    <figcaption>Christian Silver</figcaption>
                </figure>
                
            </div>
            
        </section>
    );
};

export default AuthorsList;
