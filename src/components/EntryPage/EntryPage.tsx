import styles from "./EntryPage.module.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import Register from "./Register/Register";
import Login from "./Login/Login";

const EntryPage = () => {
    const location = useLocation();
    const form = location.state;
    const [formState, setFormState] = useState<boolean>(form === "sing_in" ? true : false);
    
    const changeForm = (e:any) => {
        const formType = e.target.id;
        formType === "login" ? setFormState(true) : setFormState(false);
    };

    return (
        <main className={styles.main}>

            <ul className={styles.form_titles}>
                <li id="login" style={formState === true ? {borderBottom: "1px solid #52feaa"} : {borderBottom: "unset"}} onClick={(e) => changeForm(e)}>Login</li>
                <li id="register"style={formState === false ? {borderBottom: "1px solid #52feaa"} : {borderBottom: "unset"}} onClick={(e) => changeForm(e)}>Register</li>
            </ul>

            {
                formState ? 

                <Login />
            :
                <Register />
            }

        </main>
    );
};

export default EntryPage;
