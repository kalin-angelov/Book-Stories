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
                    <img src="https://d28hgpri8am2if.cloudfront.net/author_images/2925_1102485.jpg" alt="Author img" />
                    <figcaption>Christie Golden</figcaption>
                </figure>
                <figure onClick={navigateTo}>
                    <img src="https://cdn.rickriordan.com/wp-content/uploads/2020/10/11224708/rick.jpg" alt="Author img" />
                    <figcaption>Rick Riordan</figcaption>
                </figure>
                <figure onClick={navigateTo}>
                    <img src="https://www.hachette.co.uk/wp-content/uploads/2019/01/contributor-j-k-rowling-614.jpg?w=340" alt="Author img" />
                    <figcaption>J.K. Rowling</figcaption>
                </figure>
                <figure onClick={navigateTo}>
                    <img src="https://miro.medium.com/v2/resize:fit:621/1*DLJ3UGHPWDtrzfcMTYjfZw.jpeg" alt="Author img" />
                    <figcaption>Eiichiro Oda</figcaption>
                </figure>
                <figure onClick={navigateTo}>
                    <img src="https://deadline.com/wp-content/uploads/2023/07/george-rr-martin-hbo-house-of-the-dragon.jpg?w=681&h=383&crop=1" alt="Author img" />
                    <figcaption>George R.R. Martin</figcaption>
                </figure>
                <figure onClick={navigateTo}>
                    <img src="https://m.media-amazon.com/images/M/MV5BZmJmMzY2YzAtM2UwZi00ZDcwLThkOTItNjBjOTYxYWVhNDM3XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg" alt="Author img" />
                    <figcaption>Andrzej Sapkowski</figcaption>
                </figure>
            </div>
            
        </section>
    );
};

export default AuthorsList;
