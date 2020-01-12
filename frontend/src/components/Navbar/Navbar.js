import React from 'react';
import styled from 'styled-components';

import Action from './Action';
import SideDrawer from './SideDrawer';

function Navbar() {
  return(
    <NavbarContainer>
      <SideDrawer />
      <Title><h2>YOUR TICKET</h2></Title>
      <Action />
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  width: 100%;
  border-bottom-color: black;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 60%;
  text-align: center;
`;