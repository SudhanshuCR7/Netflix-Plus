export const validateFormFiedls = (email,password) => {
   const vEmail =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
   const vPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

   if(!vEmail) return "Email ID is not valid";
   if(!vPassword) return "Password is not valid";

   return null;
}