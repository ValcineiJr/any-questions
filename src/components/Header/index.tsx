import { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { Container } from './styles';
import Link from 'next/link';

import CategorySVG from '@assets/icons/category.svg';
import CogSVG from '@assets/icons/cog.svg';
import CoinsSVG from '@assets/icons/coins.svg';
import BagSVG from '@assets/icons/bag.svg';

import { useTheme } from 'styled-components';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogin } from 'react-icons/ai';
import { HiOutlineCog } from 'react-icons/hi';
import { useUser } from '@hooks/useUser';

export function Header() {
  const [toggle, setToggle] = useState(false);
  const [subToggle, setSubToggle] = useState(false);
  const { colors } = useTheme();
  const { asPath: route } = useRouter();
  const { mainColor } = useUser();

  const menuItems = [
    {
      id: '1',
      name: 'Personalização',
      link: '/personalize',
      icon: CategorySVG,
    },
    { id: '2', name: 'Respostas', link: '/answers', icon: BagSVG },
    { id: '3', name: 'Segmentos', link: '/segments', icon: CoinsSVG },
    { id: '4', name: 'Pagamentos', link: '/payments', icon: CogSVG },
  ];

  return (
    <Container color={mainColor}>
      <nav className="desktop">
        <ul>
          {menuItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <div>
                <item.icon
                  color={route === item.link ? mainColor : colors.text_disabled}
                />
                <li className={cx({ active: route === item.link })}>
                  {item.name}
                </li>
              </div>
            </Link>
          ))}
        </ul>
      </nav>
      {toggle && <div className="backdrop" onClick={() => setToggle(false)} />}

      <nav className={cx('mobile', { toggle })}>
        <ul>
          {menuItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <div>
                <item.icon
                  color={route === item.link ? mainColor : colors.text_disabled}
                />
                <li className={cx({ active: route === item.link })}>
                  {item.name}
                </li>
              </div>
            </Link>
          ))}
        </ul>
      </nav>
      <button onClick={() => setToggle((state) => !state)} className="menu">
        {!toggle ? (
          <AiOutlineMenu color={mainColor} size={30} />
        ) : (
          <AiOutlineClose color={mainColor} size={30} />
        )}
      </button>
      <div className="profile-box">
        <FaBell size={20} color="#868AA5" />
        <button onClick={() => setSubToggle((state) => !state)}>
          <img src="https://github.com/valcineijr.png" alt="imagem de perfil" />
          <span>Valcinei</span>
          <BiChevronDown size={20} />
        </button>
        <div className={cx('sub-menu', { subToggle })}>
          <ul>
            <li>
              <button>
                <FaUserCircle size={25} /> <span>Perfil</span>
              </button>
            </li>
            <li>
              <button>
                <HiOutlineCog size={25} /> <span>Configurações</span>
              </button>
            </li>
            <li>
              <button>
                <AiOutlineLogin size={25} /> <span>Sair</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
