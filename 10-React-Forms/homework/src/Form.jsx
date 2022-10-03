import React, { useState } from 'react';

export function validate(estado) {
  let errors = {};
  if (!estado.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(estado.username)) {
    errors.username = 'Username is invalid';
  }
  //validaciones para password
 if(!estado.password){
  errors.password = "Password is required"; 
 } else if(!/(?=.*[0-9])/.test(estado.password)){
  errors.password = "Password is invalid";
 }


  return errors;
};
//validate(algo) --> {} --> Puede tener (o no) props de errores

export default function  Form() {
  //React.useState() --> sin destructuring en el import
  const[user, setUser] = useState({username: "", password: ""})

  const [errores, setErrores] = useState({})

  // console.log(user)
  const handleInputChange = function (ev){

//Modificar el estado: "como lo hago si es un obj?"
// spread operator: ... ---> "toma todo lo que haya dentro de"
setUser({...user,[ev.target.name]: ev.target.value})
//aca iria la validacion
//codigo:
setErrores(validate({...user,[ev.target.name]: ev.target.value}));

  };
  
  return (
    <form>
      <div>
        <h2>Log In</h2>
        <hr />
      <div>
        <label>Username:</label>
        <input type="text" 
        name="username" 
        value={user.username}
        onChange={handleInputChange}
        className={errores.username && "danger"}
         />
       {errores.username && <p className="danger"> {errores.username} </p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" 
        name="password" 
        value={user.password}
        onChange={handleInputChange}
        className={errores.password && "danger"}
        /> 
        {errores.password && <p className="danger"> {errores.password} </p>}
        
      </div>
   </div>   
 </form> 
 );
}
