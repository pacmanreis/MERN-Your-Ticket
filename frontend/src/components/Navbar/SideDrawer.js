import React from 'react';
import styled from 'styled-components';

function SideDrawer() {
  return(
    <SideDrawerContainer>
      <Button>
        <ButtonBlock></ButtonBlock>
        <ButtonBlock></ButtonBlock>
        <ButtonBlock></ButtonBlock>
      </Button>
    </SideDrawerContainer>
  );
}

export default SideDrawer;

const SideDrawerContainer = styled.div`
  width: 20%;
  padding: 5px;
`;

const Button = styled.button`
  height: 3rem;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonBlock = styled.span`
  display: block;
  width: 3rem;
  height: 2.5px;
  background: black;
`;