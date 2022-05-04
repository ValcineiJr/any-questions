import styled from 'styled-components';

export const Container = styled.div`
  transition: border-color 0.6s ease;

  box-shadow: none;
  border: 1px solid #f8f8f8;

  border-radius: 10px;

  /* cursor: pointer; */

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px 20px 20px 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;

  :hover {
    border-color: #0000001a;
  }

  .header {
    display: flex;
    width: 100%;

    padding-bottom: 1rem;

    gap: 20px;

    justify-content: flex-end !important;
    align-items: center !important;

    button {
      background: #f8f8f8;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;

      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.text} !important;
      font-family: 'Poppins';
      font-weight: 500;

      padding: 0.5rem !important;
    }
  }

  .icon-container {
    /* background-color: red; */
    svg {
      height: 50px;
      width: 50px;
      margin-right: 40px;
    }
  }

  .infos {
    .title {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.6rem;

      margin-bottom: 5px;
    }

    .description {
      color: ${({ theme }) => theme.colors.alternative_text_color};
      font-size: 1.4rem;
      font-weight: 500;

      margin-bottom: 10px;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    .footer-logo {
      background-color: ${({ theme }) => theme.colors.primary};

      display: flex;
      justify-content: center;
      align-items: center;

      color: white;

      margin-right: 16px;

      font-size: 1.4rem;

      height: 30px;
      width: 30px;

      border-radius: 50%;
    }

    .footer-divisor {
      display: flex;
      flex-direction: column;

      .articles {
        color: ${({ theme }) => theme.colors.alternative_text_color};
        font-size: 1.4rem;
        font-weight: 500;
      }

      .light {
        color: #adadad;
        font-size: 1.4rem;
        font-weight: 500;
      }

      .author {
        color: ${({ theme }) => theme.colors.alternative_text_color};
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
`;
