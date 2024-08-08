import styles from "../EntryPage.module.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { UserLog } from "../../../types/userType";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm<UserLog>();

    const onSubmit: SubmitHandler<UserLog> = (data) => {
        console.log(data);
        navigate("/");
    };

    return (

        <form className={styles.entry_form} onSubmit={handleSubmit(onSubmit)}>

            <fieldset className={styles.login_form}>

                <input 
                    type="text" 
                    placeholder="Mail"
                    {...register("mail", {
                        required: "Can't be blank",
                        maxLength: {
                            value: 100,
                            message: "Can't be more than 100 characters"
                        },
                        pattern: {
                            value: /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/gm,
                            message: "Invalid mail"
                        }
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p className={styles.error}>{errors.mail?.message}</p>}

                <input 
                    type="password" 
                    placeholder="Password"
                    {...register("password", {
                        required: "Can't be blank",
                        minLength: {
                            value: 4,
                            message: "Can't be less than 4 symbols"
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p className={styles.error}>{errors.password?.message}</p>}

            </fieldset>

            <button className={styles.submit_btn} type="submit">Submit</button>
        </form>
    )
};

export default Login;
