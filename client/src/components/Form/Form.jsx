import { useState, useEffect } from "react";
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
    setUserData({ ...userData, [event.target.name]: event.target.value });
    validation(
      { ...userData, [event.target.name]: event.target.value },
      errors,
      setErrors
    );
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
            type="text"
            name="email" // Update the name attribute to "email"
            className={style.formInput}
            value={userData.email} // Update to userData.email
            onChange={handleInputChange}
            placeholder="email, 35 char max..."
          ></input>

          <p>{errors.username}</p>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            className={style.formInput}
            placeholder="6-10 chars; A0a-Z9z..."
            value={userData.password}
            onChange={handleInputChange}
          ></input>
          <p>{errors.password}</p>
          <div className={style.loginDiv}>
            <button className={style.loginButton}>Login</button>
          </div>
        </section>
      </section>
    </form>
  );
};
export default Form;
