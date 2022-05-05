import ChevronSVG from '@assets/icons/chevron.svg';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Container, Input } from './styles';

interface Props {
  label: string;
  title: string;
  isSelect?: boolean;
  onClick?: () => void;
  type?: 'image' | 'text' | 'none';
}

export function SelectComponent({
  label,
  title,
  isSelect = true,
  type = 'text',
  onClick = () => {},
}: Props) {
  const [placeholder, setPlaceholder] = useState(null);

  function Content({ children }) {
    return <Container onClick={onClick}>{children}</Container>;
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(event);
    setPlaceholder(fileUploaded.name);
  };

  if (type === 'image') {
    return (
      <Content>
        <label className="input-file" htmlFor="input-file">
          <p>{label}</p>

          <div id="input">
            <span>{!placeholder ? title : placeholder}</span>
            {isSelect && <BiChevronRight size={20} />}
          </div>
        </label>
        <input id="input-file" type="file" onChange={handleChange} />
      </Content>
    );
  }
  if (type === 'none') {
    return (
      <Content>
        <label htmlFor="input">{label}</label>
        <div id="input">
          <span>{title}</span>
          {isSelect && <BiChevronRight size={20} />}
        </div>
      </Content>
    );
  }
  return (
    <Content>
      <label htmlFor="input">{label}</label>
      <Input id="input" placeholder={title} />
    </Content>
  );
}
