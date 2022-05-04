import { ReactNode } from 'react';
import { TitleItem } from './styles';

interface Props {
  children: ReactNode;
}

export function Title({ children }: Props) {
  return <TitleItem>{children}</TitleItem>;
}
