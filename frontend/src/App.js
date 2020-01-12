import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <div>
        <h1>APP BODY</h1>
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;