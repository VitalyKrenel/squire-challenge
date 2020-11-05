import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TopBarProgress from 'react-topbar-progress-indicator';
import { observer } from 'mobx-react-lite';

import bgImage from './BackgroundImage.jpg';

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 82px;

  ${({ hasBackgroundImage }) => hasBackgroundImage && css`
    /* stylelint-disable indentation */
    background:
      linear-gradient(270deg, rgba(247, 247, 247, 0) 6.5%, #f7f7f7 71.83%),
      url(${bgImage}) center center no-repeat;
    background-size: cover;
  `}
`;

const Header = styled.header`
  display: flex;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  padding: 30px 48px;
  background-color: #161616;
  border-radius: 0 0 8px 8px;
  color: #fff;
  font-family: Bebas Neue, sans-serif;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 3px;
  text-decoration: none;
`;

TopBarProgress.config({
  barColors: {
    0: '#000',
    '1.0': '#000',
  },
});

const BarbershopPageLayout = observer(({ hasBackgroundImage, isLoading, children }) => (
  <Layout hasBackgroundImage={hasBackgroundImage}>
    {isLoading && <TopBarProgress />}
    <Header>
      <Logo href="/">Squire</Logo>
    </Header>
    {children}
  </Layout>
));

BarbershopPageLayout.propTypes = {
  hasBackgroundImage: PropTypes.bool,
  isLoading: PropTypes.bool,
};

BarbershopPageLayout.defaultProps = {
  isLoading: false,
};

export { BarbershopPageLayout };
