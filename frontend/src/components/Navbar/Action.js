import React from 'react';
import styled from 'styled-components';

function Action() {
  return(
    <ActionContainer>
      <p>LOGIN</p>
    </ActionContainer>
  );
}

export default Action;

const ActionContainer = styled.div`
  width: 20%;
  padding: 5px;
  text-align: right;
`;