import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 18px;

  height: 8.8rem;

  input[type='file']#input-file {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  label.input-file {
    p {
      margin-bottom: 10px;
    }
  }

  #input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;

    cursor: pointer;

    background-color: #f5f5f7;

    width: 100%;

    border-radius: 10px;

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

  height: 54px;

  background-color: #f5f5f7;

  width: 100%;

  border-radius: 10px;

  color: ${({ theme }) => theme.colors.text_disabled};
  font-weight: 500;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-family: 'Poppins';

  ::placeholder {
    color: ${({ theme }) => theme.colors.text_disabled};
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-family: 'Poppins';
  }
`;
