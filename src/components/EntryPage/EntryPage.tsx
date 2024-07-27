import styles from "./EntryPage.module.css";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EntryPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state;
    const [formState, setFormState] = useState<boolean>(form === "sing_in" ? true : false);
    
    const changeForm = (e:any) => {
        const formType = e.target.id;
        formType === "login" ? setFormState(true) : setFormState(false);
    };

    const onSubmit = () => {
        navigate("/");
    };

    return (
        <main className={styles.main}>

            <form className={styles.entry_form}>

                <ul className={styles.form_titles}>
                    <li id="login" style={formState === true ? {borderBottom: "1px solid #52feaa"} : {borderBottom: "unset"}} onClick={(e) => changeForm(e)}>Login</li>
                    <li id="register"style={formState === false ? {borderBottom: "1px solid #52feaa"} : {borderBottom: "unset"}} onClick={(e) => changeForm(e)}>Register</li>
                </ul>

                {
                    formState ? 

                    <fieldset className={styles.login_form}>

                        <input type="text" name="email" id="email" placeholder="Email"/>

                        <input type="text" name="password" id="password" placeholder="Password"/>

                    </fieldset>
                :
                    <fieldset className={styles.register_form}>
   
                        <input type="text" name="firstName" id="firstName" placeholder="Name"/>
        
                        <input type="text" name="lastName" id="lastName" placeholder="Last name"/>
   
                        <input type="text" name="email" id="email" placeholder="Email"/>

                        <input type="text" name="password" id="password" placeholder="Password"/>
   
                        <input type="text" name="rePassword" id="rePassword" placeholder="Confirm password"/>
    
                    </fieldset>
                    
                }

                <button className={styles.submit_btn} onClick={onSubmit} type="submit">Submit</button>

            </form>
        </main>
    );
};

export default EntryPage;
