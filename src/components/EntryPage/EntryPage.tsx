import styles from "./EntryPage.module.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const EntryPage = () => {
    const location = useLocation();
    const form = location.state;
    const [formState, setFormState] = useState(form === "sing_in" ? true : false);

    return (
        <main className={styles.entryMainContainer}>

            {
                formState ? 

                <form className={styles.loginForm}>

                    <label htmlFor="email">Email: 
                        <input type="text" name="email" id="email"/>
                    </label>
                    

                    <label htmlFor="password">Password:
                        <input type="text" name="password" id="password" />
                    </label>
                    
                </form>
            :
                <form className={styles.registerForm}>

                    <label htmlFor="firstName">First Name:
                        <input type="text" name="firstName" id="firstName"/>
                    </label>

                    <label htmlFor="lastName">Last Name:
                        <input type="text" name="lastName" id="lastName"/>
                    </label>

                    <label htmlFor="email">Email:
                        <input type="text" name="email" id="email"/>
                    </label>

                    <label htmlFor="password">Password:
                        <input type="text" name="password" id="password" />
                    </label>

                    <label htmlFor="rePassword">Repeat Password:
                        <input type="text" name="rePassword" id="rePassword" />
                    </label>
                
                </form>
                
            }

            <button 
                className={styles.toggleBtn} 
                type="button" 
                onClick={() => { setFormState(!formState) }}
            >
                {formState ? "Sing Up" : "Sing In" }
            </button>

        </main>
    );
};

export default EntryPage;
