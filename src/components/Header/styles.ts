import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 8rem;

  width: 90%;
  max-width: 1200px;

  margin: 0 auto;

  border-bottom: 1px solid #ececee;

  button.menu {
    display: none;
    background-color: transparent;
  }

  @media (max-width: 950px) {
    nav.desktop {
      display: none;
      visibility: hidden;
    }

    button.menu {
      display: initial;
    }
  }

  nav.mobile {
    display: none;
    z-index: 9999999;
    position: absolute;
    left: 0;
    top: 8rem;

    background-color: ${({ theme }) => theme.colors.container_background};

    width: 70%;
    height: 100vh;

    margin-left: -70%;

    transition: all 0.3s ease-out;

    padding: 30px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;

      div {
        display: flex;
        align-items: center;
        gap: 15px;
        background-color: #fff;
        padding: 1rem;

        border-radius: 8px;

        height: 6rem;

        width: 0;
        opacity: 0;

        transition: all 1s;
      }

      li {
        font-size: 1.6rem;
        line-height: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text_disabled};
      }

      li.active {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .backdrop {
    position: absolute;
    right: 0;
    top: 8rem;
    z-index: 9999999;
    width: 100vw;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.7);
  }

  nav.mobile.toggle {
    margin-left: 0;

    div {
      width: 100%;
      opacity: 1;
    }
  }

  @media (max-width: 950px) {
    nav.mobile {
      display: flex;
    }
  }

  nav.desktop {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;

      div {
        display: flex;
        align-items: center;
        gap: 15px;

        cursor: pointer;

        padding: 1rem;

        border-radius: 5px;

        transition: all 0.6s;
      }

      li {
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text_disabled};
      }

      li.active {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }

      div:hover {
        background-color: ${({ theme }) => theme.colors.container_background};
      }
    }
  }

  .profile-box {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    .sub-menu {
      position: absolute;

      width: 80%;

      transition: all 0.6s;

      height: 0;
      opacity: 0;

      right: 0;
      top: 70px;

      border: 1px solid ${({ theme }) => theme.colors.border_color};
      border-radius: 8px;

      background-color: #fff;

      button {
        background-color: transparent;
        width: 100%;
        padding: 1rem;

        display: flex;
        align-items: center;
        gap: 15px;

        span {
          font-weight: 500;
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.text_disabled};
          font-family: 'Poppins';
        }
      }

      button:hover {
        svg {
          color: ${({ color }) => color};
        }
        span {
          color: ${({ color }) => color};
        }
      }
    }

    .sub-menu.subToggle {
      height: auto;
      opacity: 1;
    }

    > button {
      display: flex;
      align-items: center;
      gap: 15px;

      padding: 1rem;
      border-radius: 8px;

      border: 1px solid #fff;

      transition: all 0.6s;

      background-color: #f5f5f7;

      span {
        font-weight: 500;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Poppins';
      }

      img {
        width: 40px;
        height: 40px;

        border-radius: 20px;
      }
    }

    button:hover {
      background-color: #fff;
      border-color: #0000001a;
    }
  }
`;
