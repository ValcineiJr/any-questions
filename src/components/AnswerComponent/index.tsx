import { Container } from './styles';

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

export function AnswerComponent({ data }: Props) {
  return (
    <Container>
      <button>Editar</button>
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
