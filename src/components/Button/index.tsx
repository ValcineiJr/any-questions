import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { ButtonItem } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentContainerStyle?: CSSProperties;
  children: ReactNode;
}

export function Button({
  contentContainerStyle = {},
  children,
  disabled,
  ...rest
}: Props) {
  return (
    <ButtonItem disabled={disabled} style={contentContainerStyle} {...rest}>
      {children}
    </ButtonItem>
  );
}
