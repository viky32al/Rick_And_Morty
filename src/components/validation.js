const validation = (userData) => {
const errors = {}
if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(userData.email)){
errors.email = 'el email ingresado no es valido'
}
if(!userData.email){
  errors.email = 'debe infgresar un email'
}
if(!userData.email.length > 35){
errors.email = 'el email debe superar los 35 caracteres'
}
if(!/.*\d+.*/.test(userData.password)){
errors.paassword = ' la password debe contener al menos un numero'
}
if(userData.password.length < 6 || userData.password.length > 10){
  errors.password = 'la password debe tenr un tamaño entre 6 y 10 caracteres'
}
return errors;


}
export default validation;