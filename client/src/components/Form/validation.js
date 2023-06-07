const validation = (userData, errors, setErrors) => {
  if (!userData.username) {
    setErrors({ ...errors, username: "e-mail is required" });
  } else if (userData.username.length > 35) {
    setErrors({ ...errors, username: "e-mail is too long, 35 char max" });
  } else if (
    !/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi.test(
      userData.username
    )
  ) {
    setErrors({ ...errors, username: "Invalid e-mail" });
  } else {
    setErrors({ ...errors, username: "" });
  }
  if (!userData.password) {
    setErrors({ ...errors, password: "Password is required" });
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password: "Password must be 6-10 characters long" });
  } else if (
    !/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/g.test(userData.password)
  ) {
    setErrors({
      ...errors,
      password:
        "Password must contain at least one number, one uppercase and one lowercase letter",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
};
export default validation;
