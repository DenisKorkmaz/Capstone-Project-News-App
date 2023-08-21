import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  width: 296px;
  padding: 4px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #a6a6a6;
  background: #fff;
  position: relative;
  left: 45px;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  margin-right: 8px;
`;

export const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
