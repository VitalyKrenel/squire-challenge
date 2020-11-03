import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './BackgroundImage.jpg'

const BaseStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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
    height: 100%;
    width: 100%;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0 82px;

  background: linear-gradient(270deg, rgba(247, 247, 247, 0) 6.5%, #F7F7F7 71.83%),
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

  font-family: Bebas Neue;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 3px;
  color: #FFFFFF;
  text-decoration: none;
`;

const Barbershop = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding-left: 106px;
`;


const Name = styled.p`
  margin: 0 0 24px;
  width: 200px;

  font-family: SF Pro Display;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;

  color: #000000;
`;

const Address = styled.div`
  margin: 0 0 48px;

  font-family: SF Pro Display;
  font-size: 20px;
  line-height: 26px;
  color: rgba(60, 60, 67, 0.6);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  margin-left: 24px;

  background-color: #000000;
  border: none;
  border-radius: 8px;

  color: #FFFFFF;
`;

const App = () => {
  return (
    <>
      <BaseStyle/>
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
};

export { App };
