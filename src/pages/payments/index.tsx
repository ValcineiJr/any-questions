import { ContactButton } from '@components/ContactButton';
import { Header } from '@components/Header';
import { TitleItem } from '@components/Title/styles';

import { Container } from '@styles/pages/payments';

export default function Payments() {
  return (
    <>
      <Header />
      <Container>
        <ContactButton />
        <TitleItem>Faturas Disponíveis</TitleItem>
      </Container>
    </>
  );
}
