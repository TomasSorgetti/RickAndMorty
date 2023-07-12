const validate = (form, errorsState) => {
  const errors = { ...errorsState };

  // name
  if (!form.name) errors.name = "";
  else if (form.name.length < 3) errors.name = "Debe tener mas de 3 caracteres";
  else {
    errors.name = "";
    }
    
  //password
    if (!form.password) errors.password = "";
    else if (form.password.length < 6)
      errors.password = "must have more that 6 letters";
    else errors.password = ""

    //confirm
    if (!form.confirm) errors.confirm = "";
    else if (form.confirm !== form.password)
      errors.confirm = "Is not the same password";
    else errors.confirm = "";
    
    
    return errors
};

export default validate;