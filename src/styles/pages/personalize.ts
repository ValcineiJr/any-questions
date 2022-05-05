import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 20px;

  background-color: #fff;

  padding-bottom: 50px;

  section {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    /* background: red; */

    margin-top: 6.3rem;

    div.header {
      width: 100%;
      padding-bottom: 2rem;
      text-align: center;
      margin-bottom: 2.8rem;

      border-bottom: 1px #d9dbe9 solid;
      p {
        font-weight: 500;
        line-height: 2.4rem;
        color: #8d8e9f;
        font-size: 1.6rem;
      }
    }

    button {
      margin: 0 auto;
      margin-top: 30px;
      color: white;
      padding: 0 52px;
      font-size: 2.2rem;
      line-height: 3.3rem;
      font-weight: 600;
    }
  }
`;

export const ModalContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  grid-gap: 20px;
  /* background-color: red; */
  flex: 1;

  padding-bottom: 60px;

  position: relative;

  button.confirm {
    position: absolute;

    color: white;
    font-family: 'Poppins';
    height: 40px !important;

    padding: 0 2rem;

    bottom: 0;
    right: 0;
  }
`;

export const PackageContainer = styled.div`
  background-color: #fff;

  border: 1px solid #e3e3e3;
  border-radius: 10px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  height: 80px;
`;
