import styled from "styled-components";

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 16vh;
`;

const InputWrapper = styled.input`
  width: 100%;
  max-width: 236px;
  padding: 8px;
  margin-right: 10px;
  border-radius: 8px;
  background-color: #fff;
`;

const ButtonWrapper = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 8px;
  border: 1px solid #2d352d;
  border-radius: 8px;
  background-color: darkseagreen;
  font-size: 16px;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &:active {
    background-color: #829582;
  }
`;

export { SearchWrapper, InputWrapper, ButtonWrapper };
