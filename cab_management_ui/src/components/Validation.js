const validation = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";
  }
  if (!/.{8}/.test(values.password)) {
    errors.password = "Password should have atleast 8 characters";
  }

  return errors;
};

export default validation;
