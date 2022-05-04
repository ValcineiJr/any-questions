import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;

  overflow-y: hidden;

  aside.bg {
    height: 100vh;
    max-width: 655px;
    width: 100%;
    background-color: red;

    @media (max-width: 1100px) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export const Container = styled.aside`
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    > a {
      color: white !important;
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;

    font-size: 2.2rem;
    font-weight: 600;

    top: 3.2rem;
    left: 3.2rem;
  }

  section {
    display: flex;

    flex-direction: column;

    border-bottom: 1px solid #ececf0;
    padding-bottom: 3.4rem;
    margin-bottom: 3rem;

    h1 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 2.8rem;
      font-weight: bold;
      margin-bottom: 1.2rem;
      line-height: 4.2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 3.4rem;
      line-height: 2.4rem;
    }

    .input-group {
      gap: 28px;
      display: flex;
      flex-direction: column;

      margin-bottom: 8.7rem;
    }

    .button-text {
      color: white;
      font-size: 2.2rem;
      font-weight: 600;
      line-height: 3.3rem;
    }
  }

  .footer {
    display: flex;
    gap: 4.8rem;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 500;
      line-height: 2.4rem;
      font-size: 1.6rem;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      line-height: 2.4rem;
      font-size: 1.6rem;
    }

    @media (max-width: 486px) {
      gap: 0;
      flex-direction: column;
      align-items: center;
    }
  }
`;
