import "./App.css";
import styled from "styled-components";
import {AccountBox} from "./components/accountBox";
import React from 'react';
import {Button} from "./components/accountBox/common";

const backcolor = "green";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export function App() {

   return (
    
    <AppContainer>
      <AccountBox bcolor={backcolor}/>
      <Button color={backcolor}/>
     
     
      
    </AppContainer>
    
  );
 
}

/*
class App 
{
  render()
  {
    return(
      <AppContainer>
      <AccountBox bcolor={"red"}>
      </AccountBox>
      </AppContainer>

    );
  }
}*/export default App;