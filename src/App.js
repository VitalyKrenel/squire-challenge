import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './BackgroundImage.jpg';

const BaseStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  #react-root {
    width: 100%;
    height: 100%;
  }
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0 82px;
  background:
    linear-gradient(270deg, rgba(247, 247, 247, 0) 6.5%, #f7f7f7 71.83%),
    url(${bgImage}) center center no-repeat;
  background-size: cover;
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

const Barbershop = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 106px;
  margin: auto 0;
`;

const Name = styled.p`
  width: 200px;
  margin: 0 0 24px;
  color: #000;
  font-family: SF Pro Display, sans-serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 57px;
`;

const Address = styled.div`
  margin: 0 0 48px;
  color: rgba(60, 60, 67, 0.6);
  font-family: SF Pro Display, sans-serif;
  font-size: 20px;
  line-height: 26px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const AddressLine = styled.p`
  margin: 0;
`;

const ActionsRow = styled.div`
  display: flex;
  margin-left: -24px;
`;

const Action = styled.button`
  padding: 16px 32px;
  border: none;
  margin-left: 24px;
  background-color: #000;
  border-radius: 8px;
  color: #fff;
`;

const App = () => (
  <>
    <BaseStyle />
    <Layout>
      <Header>
        <Logo href="/">Squire</Logo>
      </Header>

      <Barbershop>
        <Name>X-CUTZ Barbershop</Name>
        <Address>
          <AddressLine>4791  Lowndes Hill Park Road</AddressLine>
          <AddressLine>Bakersfield, CA 93307</AddressLine>
        </Address>

        <ActionsRow>
          <Action>Choose a service</Action>
          <Action>Choose a barber</Action>
        </ActionsRow>
      </Barbershop>
    </Layout>
  </>
);

export { App };
