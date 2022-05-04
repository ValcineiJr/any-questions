import Link from 'next/link';

import Image from 'next/image';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import ChrevronSVG from '@assets/icons/chevron.svg';
// import BackgroundImage from '@assets/img/bg.svg';
import backgroundImage from '@assets/img/bg.jpg';

import { Container, Wrapper } from '../../styles/pages/login';
import { useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (name === 'valcinei') {
      Router.replace('/dashboard', '/dashboard', { shallow: true });
    }
  }

  return (
    <Wrapper>
      <aside className="bg">
        <img src={backgroundImage} alt="" />
      </aside>
      <Container>
        <Link href="/">Voltar</Link>

        <section>
          <h1>Login</h1>
          <p>Acesse sua conta de administrador do AnyQuestions.</p>
          <div className="input-group">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              required
              type="text"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
              type="password"
            />
          </div>
          <Button
            disabled={name === '' || password === '' ? true : false}
            onClick={handleLogin}
            type="submit"
            contentContainerStyle={{
              padding: '1.8rem',
              justifyContent: 'space-between',
              width: '17.6rem',
              marginLeft: 'auto',
            }}
          >
            <span className="button-text">Entrar</span>
            <ChrevronSVG color="white" />
          </Button>
        </section>
        <div className="footer">
          <span>Você esqueceu sua senha?</span>
          <Link href="/">Esqueci minha senha</Link>
        </div>
      </Container>
    </Wrapper>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
