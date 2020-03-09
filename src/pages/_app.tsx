import React from 'react';
import { NextPageContext } from 'next';

import '../base.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

interface AppProps {
  Component: React.ComponentClass;
  pageProps: NextPageContext;
}

export default App;
