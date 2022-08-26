import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
} 
from "react-router-dom";
import Homescreen from "./Homescreen";
import Loginpage from "./Loginpage";

import "./App.css";

  function App(){
   return(
      <div className='App'>
    <Router>
      <Switch>
         <Route exact path="/" component={Loginpage}/>
         <Route exact path="/homescreen" component={Homescreen}/>
       
      </Switch>
    </Router>
    </div>
   );
  }
  export default App;