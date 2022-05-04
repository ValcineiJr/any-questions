interface Data {
  id: string;
  title: string;
  description: string;
  author: string;
  articles: number;
  icon: any;
}
interface Props {
  data: Data;
}

import { AiOutlineEdit as EditIcon } from 'react-icons/ai';
import { FiTrash2 as TrashIcon } from 'react-icons/fi';

import { Container } from './styles';

export function DoubtComponent({ data }: Props) {
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="icon-container">
          <data.icon />
        </div>
        <div className="infos">
          <p className="title">{data.title}</p>
          <p className="description">{data.description}</p>
          <div className="footer">
            <div className="footer-logo">SA</div>
            <div className="footer-divisor">
              <p className="articles">{data.articles} artigos nessa coleção</p>
              <div>
                <span className="light">Escrito por </span>
                <span className="author">{data.author}.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
