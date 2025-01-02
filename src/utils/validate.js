export const isValid=(email,password)=>{
    //  email
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    // password
    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isValidEmail)return "This is not a valid email"
    if(!isValidPassword)return "Make your password strong "
    return null;
}