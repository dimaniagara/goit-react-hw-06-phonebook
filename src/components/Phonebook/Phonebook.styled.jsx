import styled from 'styled-components';

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid black;
  padding: 15px;
  margin: 20px 0 50px;
  & input {
    margin: 8px 0 16px;
    width: 200px;
  }
  & button {
    width: 150px;
  }
`;
