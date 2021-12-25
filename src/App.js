import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Topics from './Components/Topics';
import {Routes, Route} from "react-router-dom";
import Profile from './Components/Profile';

const App = () => {
  return (
    
      <Container>
        <Header/>
        <Body>
          <Topics/>
          <Routes>
            {/* <Route path="/" element={} /> */}
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Body> 
      </Container>
  );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: #171717;
`;
const Body = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: auto;
    margin: 5%;
`;
export default App;