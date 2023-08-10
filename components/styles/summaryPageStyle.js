import styled from "styled-components";

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  z-index: 0;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 170px;
  width: 200px;
  height: 91px;
  border-radius: 30px;
  backdrop-filter: blur(0px); */
  background: gba(255, 255, 255, 255) ;
  backdrop-filter: blur(70px);
  width: 284px;
  height: 149px;
  z-index: 2;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const StyledH2 = styled.h2`
  display: flex;
  width: 242px;
  height: 86px;
  align-items: center;
  color: #000;
  font-family: Source Serif Pro;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  margin-left: 10px;

`;

export const Styledp = styled.p`
position: relative;
top: 130px;
  color: #000;
  font-family: Source Serif Pro;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 20.8px;
  max-width: 285px;
`;

export const TextContainer = styled.div`
  position: relative;
  bottom: 150px;
  width: 400px;
  flex-shrink: 0;
  border-radius: 30px 30px 0px 0px;
  background: white;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  z-index: 1;

`;

export const StyledButton = styled.button`
  position: relative;
  bottom: 200px;
  right: 180px;
  width: 400px;
  border: transparent;
  background: none;
  display: flex;
  width: 127px;
  height: 33px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 10;
`;
