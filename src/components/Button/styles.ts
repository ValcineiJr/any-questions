import styled, { css } from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonItem = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  ${css<ButtonProps>`
    ${({ disabled, theme }) =>
      disabled &&
      `background-color: #CBCED8; cursor: not-allowed; filter: brightness(80%); `}
  `};

  height: 6rem;

  display: flex;
  align-items: center;

  border-radius: 8px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(80%);
  }
`;
