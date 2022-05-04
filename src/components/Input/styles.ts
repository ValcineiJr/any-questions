import styled, { css } from 'styled-components';

interface InputProps {
  isFocus: boolean;
  value?: string | number | readonly string[];
}

export const InputContainer = styled.div<InputProps>`
  height: 6.4rem;
  display: block;
  background-color: ${({ isFocus, theme }) =>
    isFocus ? '#fff' : theme.colors.container_background};
  border-radius: 10px;

  border: ${({ isFocus, theme }) =>
    isFocus ? `2px solid ${theme.colors.primary}` : `2px solid transparent`};

  padding-left: 6.4rem;

  transition: border 0.3s;

  position: relative;

  .icon-container {
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
  }

  .placeholder {
    position: absolute;
    top: 2rem;
    left: 6.4rem;

    color: #8b8fa8;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    transition: top, left 0.3s;
  }

  ${css<InputProps>`
    ${({ isFocus, theme, value }) =>
      (isFocus || value !== '') &&
      `.placeholder {
    position: absolute;
    top: -1.2rem;
    left: 1.6rem;

    background-color: white;
    color:${theme.colors.text};

    font-weight: 500;
    font-size: 1.2rem;
    line-height:1.8rem;

    padding:2px 10px;
    text-align:center;
  }`}
  `}

  ${css<InputProps>`
    ${({ value, isFocus }) =>
      value !== '' && !isFocus && `.placeholder{display:none;}`}
  `}
`;

export const InputItem = styled.input<InputProps>`
  height: 100%;
  width: 100%;
  border-radius: 10px;

  color: #8b8fa8;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: 'Poppins';

  background-color: ${({ isFocus }) => (isFocus ? '#fff' : 'transparent')};

  &:focus {
    outline: none;
  }
`;
