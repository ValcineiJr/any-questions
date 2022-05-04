import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 18px;

  #input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;

    cursor: pointer;

    background-color: #f5f5f7;

    width: 100%;

    border-radius: 10px;

    svg {
      height: 14px;
      width: 14px;
    }
    span {
      color: ${({ theme }) => theme.colors.text_disabled};
      font-weight: 500;
      line-height: 2.4rem;
      font-size: 1.6rem;
    }
  }

  label {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.6rem;

    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  padding: 15px 20px;

  background-color: #f5f5f7;

  width: 100%;

  border-radius: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text_disabled};
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-family: 'Poppins';
  }
`;
