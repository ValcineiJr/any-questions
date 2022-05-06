import { AppProviders } from '@contexts/index';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <AppProviders>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
