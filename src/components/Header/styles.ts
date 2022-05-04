import styled from 'styled-components';

export const Container = styled.nav`
  &#desktop {
    @media (max-width: 821px) {
      display: none;
    }
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    .menu {
      display: flex;
      /* background-color: red; */
      height: 8rem;
      align-items: center;
      justify-content: space-between;
    }

    .profile-box {
      display: flex;
      z-index: 20;
      align-items: center;
      gap: 2.3rem;

      order: 1;

      height: 5.7rem;

      button {
        display: flex;
        gap: 2rem;
        align-items: center;

        border: 1px solid #e3e3e3;

        border-radius: 10px;

        background-color: #f5f5f7;

        padding: 0.8rem 2rem;

        svg {
          transform: rotate(90deg);
        }

        img {
          width: 4rem;
          height: 4rem;

          border-radius: 50%;
        }
        span {
          color: ${({ theme }) => theme.colors.text};
          font-size: 1.6rem;
          line-height: 2.4rem;
          font-weight: 500;
        }

        @media (max-width: 500px) {
          span {
            display: none;
          }
        }
      }
    }

    #nav {
      display: flex;
      gap: 2rem;

      li > div {
        display: flex;
        gap: 2rem;
        align-items: center;
        padding: 1rem;

        cursor: pointer;
      }

      li {
        transition: background-color 0.6s ease-in-out;
        border-radius: 5px;
      }

      li:hover {
        background-color: ${({ theme }) => theme.colors.container_background};
      }

      li > div > span.active {
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }

      li > div > span {
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text_disabled};
      }
    }
  }
  &#mobile {
    @media (min-width: 821px) {
      display: none;
    }
    height: 100vh;
    width: 100vw;

    background: #fff;

    position: relative;

    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

    .profile-box {
      display: flex;
      z-index: 20;
      align-items: center;
      gap: 2.3rem;

      position: absolute;
      right: 20px;
      top: 7px;

      height: 5.7rem;

      button {
        display: flex;
        gap: 2rem;
        align-items: center;

        border: 1px solid #e3e3e3;

        border-radius: 10px;

        background-color: #f5f5f7;

        padding: 0.8rem 2rem;

        svg {
          transform: rotate(90deg);
        }

        img {
          width: 4rem;
          height: 4rem;

          border-radius: 50%;
        }
        span {
          color: ${({ theme }) => theme.colors.text};
          font-size: 1.6rem;
          line-height: 2.4rem;
          font-weight: 500;
        }

        @media (max-width: 500px) {
          span {
            display: none;
          }
        }
      }
    }

    #burgerBtn {
      z-index: 21;
      border-top: 2px solid ${({ theme }) => theme.colors.primary};
      height: 3rem;
      width: 4rem;
      box-sizing: border-box;
      position: absolute;

      left: 2rem;
      top: 2.5rem;
      cursor: pointer;
      transition: all 0.3s;
      &:before {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        width: 4rem;
        left: 0;
        background: ${({ theme }) => theme.colors.primary};
        top: 1rem;
        transition: all 0.3s;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        width: 4rem;
        left: 0;
        background: ${({ theme }) => theme.colors.primary};
        bottom: 0;
        transition: all 0.3s;
      }
    }

    #nav {
      position: absolute;
      z-index: 10;
      margin: 10rem 0 0 2rem;

      width: 90%;

      li {
        display: flex;
        align-items: center;
        height: 6rem;
        transition: all 1s;
        margin: 3rem 0;

        & + li {
          margin-left: -4rem;
          & + li {
            margin-left: -8rem;
            & + li {
              margin-left: -12rem;
            }
          }
        }
      }

      li > div {
        transition: all 1s;
        width: 0px;
        display: flex;
        align-items: center;
        background-color: #fff;

        height: 100%;
        gap: 20px;

        border-radius: 5px;
      }

      li > div > span.active {
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
      }

      li > div > span {
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text_disabled};
      }
    }

    &.navigation {
      background-color: #f1f1f4;
      transition: all 0.3s ease-in;

      .profile-box {
        button {
          background-color: #fff;
        }
      }
      #nav li {
        margin-left: 0;
      }

      #nav li > div {
        padding: 20px;
        width: 100%;
      }

      #burgerBtn {
        border-color: transparent;
        z-index: 1;
        &:before {
          transform: rotate(45deg);
          width: 3.3rem;
          left: 0.1rem;
        }
        &:after {
          transform: rotate(135deg);
          bottom: 1.5rem;
          width: 3.3rem;
          left: 0.1rem;
        }
      }
    }

    &.navigation {
      #mobileBodyContent {
        opacity: 0;
        transform: scale(0.85);
        visibility: hidden;
      }
    }

    &.navigation {
      #mobileBodyContent {
        overflow: hidden;
      }
    }

    #mobileBodyContent {
      padding-top: 8rem;
      position: relative;
      z-index: 20;
      width: 100%;
      height: 100%;

      visibility: visible;
      transition: all 0.3s ease-in;

      /* padding-bottom: 50px; */
    }
  }
`;
