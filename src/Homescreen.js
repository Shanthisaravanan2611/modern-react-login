import React from 'react';
import {Sidebar} from  "./Sidebar";
import "./App.css";

function Homescreen()
{
    return  (
    <div classname="main"><Sidebar/>
    <div className="container">
    <h1 classname="content">This is the container page</h1>
    </div>
    </div>
   )  
    
       


}
export default Homescreen;