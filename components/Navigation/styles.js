import styled from "styled-components";

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  a:first-child {
    margin: 30px; 
  }
`;

export const NavDiv = styled.nav`
display: flex;
width: 338px;
padding: 16px 40px 8px 40px;
align-items: center;
gap: 85px;
z-index: 3;
`;