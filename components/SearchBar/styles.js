import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  width: 296px;
  height: 17px;
  padding: 8px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #A6A6A6;
  background: #FFF;
  position: relative;
  left: 45px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
`;

export const IconWrapper = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

