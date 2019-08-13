import React from "react";
import "./App.css";
import styled from 'styled-components';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props


  return (
      <Container>


        <Logo />  
    
          <StyledApp>
        <StyledDisplay>
          <Display />
        </StyledDisplay>
            
            <StyledCalc>
                
                <div className="left">
                  <Specials />
                  <Numbers />
                </div>

                <div className="right">
                  <Operators />
                </div>

            </StyledCalc>

          </StyledApp>
      </Container>
  );
}

const Container = styled.div`
    background-color: #A81D37;
    padding: 35px 36px 40px 36px;
    max-width:472px;
    height: 709px;
    border-radius: 20px;
    box-sizing: border-box;
    border: 2px solid #515151;
`

const StyledDisplay = styled.div`
    height: 100px;
    width: 400px; 
    border-radius: 50px;
    color: white;
    background-color: #323335;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 48px;
    margin-bottom: 28px;
    padding-right: 16px;
    box-sizing: border-box;
`
const StyledCalc = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledApp = styled.div`
  width: 400px;
`
export default App;
