interface Data {
  id: string;
  title: string;
  description: string;
  author: string;
  articles: number;
}
interface Props {
  data: Data;
}

import { AiOutlineEdit as EditIcon } from 'react-icons/ai';
import { FiTrash2 as TrashIcon } from 'react-icons/fi';

import { Container } from './styles';

export function AnswerComponent({ data }: Props) {
  return (
    <Container>
      <div className="header">
        <button>
          <EditIcon size={20} />
        </button>
        <button>
          <TrashIcon size={20} />
        </button>
      </div>
      <div className="infos">
        <p className="title">{data.title}</p>
        <p className="description">{data.description}</p>
        <div className="footer">
          <div className="footer-logo">SA</div>
          <div className="footer-divisor">
            <div>
              <span className="light">Escrito por </span>
              <span className="author">{data.author}.</span>
            </div>
            <span className="light">Atualizado a mais de uma semana </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
