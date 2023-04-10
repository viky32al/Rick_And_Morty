import { useState } from 'react';
import validation from './validation.js';

const Form =({ login }) =>{
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
     email: '', password: '' 
    });
  const handleChange = (event) => {
   setUserData({
    ...userData,
    [event.target.name]: event.target.value
   })
  
  setErrors(validation({
    ...userData,
    [event.target.name]: event.target.value
  }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
 
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor = 'email'>Email:
        </label>
          <input
            type="emailt"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor = 'password' >
          Password:
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        {errors.password && <p>{errors.password}</p>}
        <button>Submit</button>
      </form>
  );
}

export default Form;


