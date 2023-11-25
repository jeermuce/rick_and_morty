const validation = (userData) => {
  let errors = {};
  const { email, password } = userData;
  if (!email) {
    errors = { ...errors, email: "e-mail is required" };
  } else if (email.length > 35) {
    errors = { ...errors, email: "e-mail is too long, 35 char max" };
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gi.test(email)
  ) {
    errors = { ...errors, email: "Invalid e-mail" };
  } else {
    errors = { ...errors, email: "" };
  }
  if (!password) {
    errors = { ...errors, password: "Password is required" };

  }
  else if (password.length < 6 || password.length > 10) {
    errors = { ...errors, password: "Password must be 6-10 characters long" };
  }
  else if (
    !/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/g.test(password)
  ) {
    errors = {
      ...errors,
      password:
        "Password must contain at least one number, one uppercase and one lowercase letter",
    };
  }
  else {
    errors = { ...errors, password: "" };
  }
  return errors;
};
export default validation;
