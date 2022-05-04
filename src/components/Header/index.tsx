import { useState } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { Container } from './styles';
import Link from 'next/link';

import CategorySVG from '@assets/icons/category.svg';
import CogSVG from '@assets/icons/cog.svg';
import CoinsSVG from '@assets/icons/coins.svg';
import BagSVG from '@assets/icons/bag.svg';
import ChevronSVG from '@assets/icons/chevron.svg';
import NotificationSVG from '@assets/icons/notification.svg';
import { useTheme } from 'styled-components';

export function Header({ children }) {
  const [toggle, setToggle] = useState(false);
  const { colors } = useTheme();
  const { asPath: route } = useRouter();

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
    <>
      <Container id="desktop" className={cx({ navigation: toggle })}>
        <div className="menu">
          <div className="profile-box">
            <NotificationSVG />
            <button>
              <img
                src="https://github.com/valcineijr.png"
                alt="foto de perfil"
              />
              <span>Valcinei</span>
              <ChevronSVG color={colors.text} />
            </button>
          </div>
          <ul id="nav">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <div>
                    <item.icon
                      color={
                        route === item.link
                          ? colors.primary
                          : colors.text_disabled
                      }
                    />
                    <span className={cx({ active: route === item.link })}>
                      {item.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="mobileBodyContent">{children}</div>
      </Container>
      <Container id="mobile" className={cx({ navigation: toggle })}>
        <div onClick={() => setToggle((state) => !state)} id="burgerBtn"></div>
        <div className="profile-box">
          <NotificationSVG />
          <button>
            <img src="https://github.com/valcineijr.png" alt="foto de perfil" />
            <span>Valcinei</span>
            <ChevronSVG color={colors.text} />
          </button>
        </div>
        <ul id="nav">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>
                <div>
                  <item.icon
                    color={
                      route === item.link
                        ? colors.primary
                        : colors.text_disabled
                    }
                  />
                  <span className={cx({ active: route === item.link })}>
                    {item.name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div id="mobileBodyContent">{children}</div>
      </Container>
    </>
  );
}
