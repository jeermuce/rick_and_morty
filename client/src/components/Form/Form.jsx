import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";
import style from "./Form.module.css";
import Portal from "../../assets/portal_best.png";

const Form = ({ login, setAccess }) => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    useEffect(() => {
        setAccess(false);
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setErrors(validation({ ...userData, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit} className={style.Form}>
            <section className={style.imageContainer}>
                <img src={Portal} alt="Portal" className={style.portalImage} />
            </section>
            <section className={style.formContainer}>
                <section className={style.inputContainer}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="email"
                        name="email"
                        className={style.formInput}
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="email, 35 char max..."
                    />

                    <p>{errors.username}</p>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className={style.formInput}
                        placeholder="6-10 chars; A0a-Z9z..."
                        value={userData.password}
                        onChange={handleInputChange}
                    />

                    <p>{errors.password}</p>
                    <div className={style.loginDiv}>
                        <button type="submit" className={style.loginButton}>
                            Login
                        </button>
                    </div>
                </section>
            </section>
        </form>
    );
};

export default Form;
