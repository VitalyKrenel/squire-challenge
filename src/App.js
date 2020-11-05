import { createGlobalStyle } from 'styled-components';
import { BarbershopPage } from './app/Barbershop/BarbershopPage';

const BaseStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    min-height: 100%;
  }

  #react-root {
    width: 100%;
    min-height: 100vh;
    background: #f7f7f7;
  }
`;

const App = () => (
  <>
    <BaseStyle />
    <BarbershopPage />
  </>
);

export { App };
