import { createGlobalStyle } from 'styled-components';
import { BarbershopPage } from './app/Barbershop/BarbershopPage';

import SfUiDisplayBold from '~/fonts/SF-UI-Display-Bold.otf';
import SfUiDisplaySemibold from '~/fonts/SF-UI-Display-Semibold.otf';
import SfUiDisplayRegular from '~/fonts/SF-UI-Display-Regular.otf';

import SfUiTextRegular from '~/fonts/SF-UI-Text-Regular.otf';
import SfUiTextSemibold from '~/fonts/SF-UI-Text-Semibold.otf';

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

const CustomFonts = createGlobalStyle`
  /* Font: SF Pro Display */
  @font-face {
    font-display: swap;
    font-family: SF Pro Display;
    font-weight: 700;
    src: url(${SfUiDisplayBold});
  }

  @font-face {
    font-display: swap;
    font-family: SF Pro Display;
    font-weight: 600;
    src: url(${SfUiDisplaySemibold});
  }

  @font-face {
    font-display: swap;
    font-family: SF Pro Display;
    font-weight: 400;
    src: url(${SfUiDisplayRegular});
  }

  /* Font: SF Pro Text */
  @font-face {
    font-display: swap;
    font-family: SF Pro Text;
    font-weight: 600;
    src: url(${SfUiTextSemibold});
  }

  @font-face {
    font-display: swap;
    font-family: SF Pro Text;
    font-weight: 400;
    src: url(${SfUiTextRegular});
  }
`;

const App = () => (
  <>
    <CustomFonts />
    <BaseStyle />
    <BarbershopPage />
  </>
);

export { App };
