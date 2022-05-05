import { Button } from '@components/Button';
import { Header } from '@components/Header';
import Pagination from '@etchteam/next-pagination';
import Router from 'next/router';
import '@etchteam/next-pagination/dist/index.css';

import {
  AiOutlineMail as MailIcon,
  AiOutlinePlusCircle as PlusIcon,
} from 'react-icons/ai';
import { Si1Password as PasswordIcon } from 'react-icons/si';

import EmptyFolderSVG from '@assets/icons/empty-folder.svg';

import { Container } from '@styles/pages/segments';
import { ContactButton } from '@components/ContactButton';
import { DoubtComponent } from '@components/DoubtComponent';
import { TitleItem } from '@components/Title/styles';
import { useEffect, useState } from 'react';
import Modal from '@components/Modal';
import { useTheme } from 'styled-components';

export default function Segments(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  function handleToggleModal() {
    setIsOpen((state) => !state);
  }

  const doubts = [
    {
      id: '1',
      title: 'Senhas',
      description:
        'Tudo o que você precisa saber para gerenciar, redefinir ou recuperar a suas senha.',
      author: 'Suporte do aluno',
      articles: 1,
      icon: PasswordIcon,
    },
    {
      id: '2',
      title: 'Email',
      description:
        'Tudo o que você precisa saber para gerenciar, redefinir ou recuperar e acessar seu email.',
      author: 'Suporte do aluno',
      articles: 6,
      icon: MailIcon,
    },
    {
      id: '3',
      title: 'Aluno',
      description:
        'Tudo sobre o portal do aluno: Agenda, Diciplinas, Docs, Financeiro, Histórico, Mensagens, Mural, Perfil e Solicitação de protocolo.',
      author: 'Suporte do aluno',
      articles: 3,
      icon: PasswordIcon,
    },
    {
      id: '4',
      title: 'Aluno',
      description:
        'Tudo sobre o portal do aluno: Agenda, Diciplinas, Docs, Financeiro, Histórico, Mensagens, Mural, Perfil e Solicitação de protocolo.',
      author: 'Suporte do aluno',
      articles: 3,
      icon: MailIcon,
    },
  ];

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const pagginationHandler = (page) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const Content = ({ children }) => (
    <>
      <Header />
      <Container>
        <ContactButton />

        <Modal
          title="Oi"
          onBackDropPress={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
          show={modalIsOpen}
        >
          Hello from the modal!
        </Modal>
        {children}
      </Container>
    </>
  );

  if (doubts.length <= 0) {
    return (
      <Content>
        {
          <>
            <TitleItem>Segmento de Dúvidas</TitleItem>
            <section className="empty">
              <EmptyFolderSVG />
              <div className="p-group">
                <p className="title">Você não tem segmentos cadastrados</p>
                <p className="subtitle">Crie um pelo botão abaixo.</p>
              </div>

              <Button onClick={handleToggleModal}>
                <span>NOVO SEGMENTO</span>
              </Button>
            </section>
          </>
        }
      </Content>
    );
  }

  return (
    <Content>
      {
        <>
          <div className="header">
            <TitleItem>Segmento de Dúvidas</TitleItem>
            <button>
              <PlusIcon size={30} color={colors.text} />
              <span>Nova Resposta</span>
            </button>
          </div>
          <br />
          <br />
          <Pagination perPageText="Por página" total={1000} />
          <section>
            {doubts.map((item) => (
              <DoubtComponent key={item.id} data={item} />
            ))}
          </section>
        </>
      }
    </Content>
  );
}
