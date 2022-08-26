import React from 'react';
import {useHistory} from "react-router-dom";
import "./App.css";
 function LoginPage()
 {
  
    const history = useHistory();
   
       return (
      <div classname="form">
       
      <div classname="input">
         <label>Username</label>
         <input type="text" placeholder="username"></input>
      </div>
      <div classname="input">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
      </div>
      <div classname="button">
          <button onClick={() => {history.push("/Homescreen");
         }}>Login</button>
         
      </div>
      </div>
   );
}

export default LoginPage;
