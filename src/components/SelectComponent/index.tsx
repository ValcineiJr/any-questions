import ChevronSVG from '@assets/icons/chevron.svg';
import { Container, Input } from './styles';

interface Props {
  label: string;
  title: string;
  isSelect?: boolean;
  onClick?: () => void;
}

export function SelectComponent({
  label,
  title,
  isSelect = true,
  onClick = () => {},
}: Props) {
  return (
    <Container onClick={onClick}>
      <label htmlFor="input">{label}</label>
      {isSelect ? (
        <div id="input">
          <span>{title}</span>
          <ChevronSVG />
        </div>
      ) : (
        <Input placeholder={title} />
      )}
    </Container>
  );
}
