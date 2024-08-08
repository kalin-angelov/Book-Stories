import styles from "../EntryPage.module.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UserReg } from "../../../types/userType";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<UserReg>();

    const onSubmit:SubmitHandler<UserReg> = (data) => {
        console.log(data);
        navigate("/");
    };

    return (

        <form className={styles.entry_form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.register_form}>
            
                <input 
                    type="text" 
                    placeholder="Name"
                    {...register("firstName", {
                        required: "Can't be blank",
                        minLength: {
                            value: 3,
                            message: "Can't be less than 3 characters"
                        },
                        maxLength: {
                            value: 100,
                            message: "Can't be more thank 100 characters"
                        }
                    })}
                    aria-invalid={errors.firstName ? "true" : false}
                />
                {errors.firstName && <p className={styles.error}>{errors.firstName?.message}</p>}

                <input 
                    type="text" 
                    placeholder="Last name"
                    {...register("lastName", {
                        required: "Can't be blank",
                        minLength: {
                            value: 3,
                            message: "Can't be less than 3 characters"
                        },
                        maxLength: {
                            value: 100,
                            message: "Can't be more thank 100 characters"
                        }
                    })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}

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


                <input 
                    type="password" 
                    placeholder="Confirm password"
                    {...register("rePass", {
                        required: "Can't be blank",
                        minLength: {
                            value: 4,
                            message: "Can't be less than 4 symbols"
                        }
                    })}
                    aria-invalid={errors.rePass ? "true" : "false"}
                />
                {errors.rePass && <p className={styles.error}>{errors.rePass?.message}</p>}

            </fieldset>

            <button className={styles.submit_btn} type="submit">Submit</button>
        </form>
    )
};

export default Register;
