import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const StyledH2 = styled.h2`
  color: #000;
  font-family: Source Serif Pro;
  font-size: 15px;
  width: 264px;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  gap: 20px;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 30px;
  border-radius: 40px;
  background: rgba(0, 128, 255, 0.9);
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95px;
  height: 30px;
  border-radius: 40px;
  background: rgba(0, 128, 255, 0.9);
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 13px;
  border: none;
`;
