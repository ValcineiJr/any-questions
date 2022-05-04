import { useState } from 'react';

import { ContactButton } from '@components/ContactButton';
import { AnswerComponent } from '@components/AnswerComponent';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import Modal from '@components/Modal';
import { TitleItem } from '@components/Title/styles';

import EmptyFolderSVG from '@assets/icons/empty-folder.svg';
import ArrowIndicatorSVG from '@assets/icons/arrow-indicator.svg';

import { Container } from '@styles/pages/answers';

export default function Answers() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleToggleModal() {
    setIsOpen((state) => !state);
  }

  const doubts = [
    // {
    //   id: '1',
    //   title: 'Como mudar minha senha do portal do aluno? ',
    //   description:
    //     'Nesse tutorial você aprenderá como mudar sua senha do portal do aluno.',
    //   author: 'Suporte do aluno',
    //   articles: 1,
    // },
  ];

  // const doubts = [];

  const Content = ({ children }) => (
    <Header>
      <Container>
        <ContactButton />

        <Modal title="Oi" onClose={() => setIsOpen(false)} show={modalIsOpen}>
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
            <TitleItem>Minhas Respostas</TitleItem>
            <section className="empty">
              <EmptyFolderSVG />
              <div className="p-group">
                <p className="title">Você não tem respostas cadastradas</p>
                <p className="subtitle">Crie uma pelo botão abaixo.</p>
              </div>

              <div className="button-container">
                <ArrowIndicatorSVG className="arrow" />
                <Button onClick={handleToggleModal}>
                  <span>NOVA RESPOSTA</span>
                </Button>
              </div>
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
            <TitleItem>Minhas Respostas</TitleItem>
            <Button onClick={handleToggleModal}>
              <span>NOVO</span>
            </Button>
          </div>
          <section>
            {doubts.map((item) => (
              <AnswerComponent key={item.id} data={item} />
            ))}
          </section>
        </>
      }
    </Content>
  );
}
