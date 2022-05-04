import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  background-color: #fff;
  border-top: 1px solid #ececee;

  padding-bottom: 50px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    button {
      color: white;
      padding: 0 4rem;
      font-size: 1.6rem;
      line-height: 3.3rem;
      font-weight: 600;
      font-family: 'Poppins';
    }
  }

  section {
    width: 100%;
    max-width: 865px;

    margin: 0 auto;

    margin-top: 6.3rem;

    @media (min-width: 821px) {
      margin-top: 80px;
    }
  }

  section.empty {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    align-items: center;

    text-align: center;

    gap: 7.1rem;

    margin-top: 6.3rem;

    .button-container {
      position: relative;

      .arrow {
        position: absolute;
        left: -90px;
        top: -50px;
      }
    }

    button {
      color: white;
      padding: 0 4rem;
      font-size: 1.6rem;
      line-height: 3.3rem;
      font-weight: 600;
      font-family: 'Poppins';
    }
  }

  .p-group .title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 600;
  }
  .p-group .subtitle {
    color: ${({ theme }) => theme.colors.text_disabled};
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: 500;
  }
`;
