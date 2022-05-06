import { useUser } from '@hooks/useUser';
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { ButtonItem } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentContainerStyle?: CSSProperties;
  children: ReactNode;
  color?: string;
}

export function Button({
  contentContainerStyle = {},
  children,
  disabled,
  color = '#fff',
  ...rest
}: Props) {
  const { mainColor } = useUser();
  return (
    <ButtonItem
      disabled={disabled}
      color={mainColor}
      style={contentContainerStyle}
      {...rest}
    >
      {children}
    </ButtonItem>
  );
}
