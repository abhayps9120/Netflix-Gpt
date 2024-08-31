const validate = (email , password) => {
  const isEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
  const isPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  // const isName = /^[a-zA-Z ]{2,30}$/.test(name);

 
  if(!isEmail) return "Email ID is not VALID"
  if(!isPass)  return "Password is Not VALID"
  //  if(!isName)  return "Name is Not VALID"

  return null
}

export default validate