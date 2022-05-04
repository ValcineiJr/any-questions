import { Button } from '@components/Button';
import { Header } from '@components/Header';

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
import { useState } from 'react';
import Modal from '@components/Modal';
import { useTheme } from 'styled-components';

export default function Segments() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { colors } = useTheme();

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
    {
      id: '5',
      title: 'Aluno',
      description:
        'Tudo sobre o portal do aluno: Agenda, Diciplinas, Docs, Financeiro, Histórico, Mensagens, Mural, Perfil e Solicitação de protocolo.',
      author: 'Suporte do aluno',
      articles: 3,
      icon: PasswordIcon,
    },
  ];

  const Content = ({ children }) => (
    <Header>
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
    </Header>
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
            </button>
          </div>
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
