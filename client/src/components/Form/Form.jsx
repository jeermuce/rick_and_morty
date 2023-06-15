import { useState, useEffect } from "react";
import validation from "./validation";
import style from "./Form.module.css";
import Portal from "../../assets/portal_best.png"; // import the image here
//Responsive ready
const Form = ({ login, setAccess }) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  useEffect(() => {
    setAccess(false);
  }, []);
  const handleInputChange = (event) => {
    /* const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value }); */
    setUserData({ ...userData, [event.target.name]: event.target.value });
    validation(
      { ...userData, [event.target.name]: event.target.value },
      errors,
      setErrors
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.Form}>
      <section className={style.imageContainer}>
        <img
          src={Portal} // use the imported variable as the src
          alt="Portal"
          className={style.portalImage}
        />
      </section>
      <section className={style.formContainer}>
        <section className={style.inputContainer}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className={style.formInput}
            value={userData.username}
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
