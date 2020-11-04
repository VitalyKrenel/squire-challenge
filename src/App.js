import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react-lite';

import bgImage from './BackgroundImage.jpg';
import { bookingStore, STEP_CHOOSE_SERVICE, STEP_CHOOSE_BARBER } from './BookingStore';
import { barbers } from '~/api/barbers';

const BaseStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
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
    height: 100%;
  }
`;

const getBackground = (hasBackgroundImage) => (hasBackgroundImage ? css`
  background:
    linear-gradient(270deg, rgba(247, 247, 247, 0) 6.5%, #f7f7f7 71.83%),
    url(${bgImage}) center center no-repeat;
  background-size: cover;
` : css`
  background: #f7f7f7;
`);

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0 82px;

  ${({ hasBackgroundImage }) => getBackground(hasBackgroundImage)}
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

const CardGrid = styled.section`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(3, 1fr);
`;

const Card = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border: 1px solid #c7c7cc;
  border-radius: 16px;
  transition: all 0.3s 0s ease-out;

  &:hover {
    border: 1px solid #e1e1e1;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
`;

const BarberPhoto = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
  border-radius: 8px;
`;

const BarberName = styled.p`
  margin: 0 0 8px;
  color: #000;
  font-family: SF Pro Display, sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.55px;
  line-height: 24px;
  text-align: center;
`;

const AvailabilityStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 24px;

  &::after {
    width: 40px;
    height: 1px;
    background-color: #d1d1d6;
    content: '';
  }
`;

const Status = styled.p`
  margin: 0 0 24px;
  color: rgba(60, 60, 67, 0.6);
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  text-transform: capitalize;
`;

const AboutBarberLink = styled.a`
  color: #006bb2;
  font-family: SF Pro Display, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
`;

const ContentContainer = styled.div`
  padding-top: 70px;
`;

const serviceThemes = {
  initial: {
    durationTextColor: 'rgba(60, 60, 67, 0.6)',
  },
  selected: {
    cardBackgroundColor: '#161616',
    cardTextColor: '#ffffff',
    durationColor: '#ffffff',
  },
};

const ServiceCard = styled(Card)`
  min-height: 134px;
  padding: 24px;
  transition: all 0.2s 0s ease-in-out;

  ${({ theme }) => theme.cardBackgroundColor && css`
    background-color: ${theme.cardBackgroundColor};
    color: ${theme.cardTextColor};

    &:hover {
      background-color: ${theme.cardBackgroundColor};
      box-shadow: none;
    }
  `}
`;

const ServiceName = styled.p`
  margin: 0 0 20px;
  font-family: SF Pro Text, sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
`;

const ServiceInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Duration = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.durationTextColor};
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  line-height: 22px;
`;

const Price = styled.p`
  margin: 0;
  font-family: SF Pro Display, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
`;

const Order = styled.div`
  width: 412px;
  min-height: 760px;
  padding: 40px 32px;
  border: 1px solid #e1e1e1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const Heading = styled.p`
  margin: 0 0 32px;
`;

const OrderDetails = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const OrderItem = styled.li`
  margin: 0;

  &::before {
    content: '';
  }
`;

const App = observer(() => (
  <>
    <BaseStyle />
    <Layout hasBackgroundImage={!bookingStore.currentStep}>
      <Header>
        <Logo href="/">Squire</Logo>
      </Header>

      {!bookingStore.currentStep && (
        <Barbershop>
          <Name>X-CUTZ Barbershop</Name>
          <Address>
            <AddressLine>4791  Lowndes Hill Park Road</AddressLine>
            <AddressLine>Bakersfield, CA 93307</AddressLine>
          </Address>

          <ActionsRow>
            <Action onClick={() => bookingStore.setStep(STEP_CHOOSE_SERVICE)}>
              Choose a service
            </Action>
            <Action onClick={() => bookingStore.setStep(STEP_CHOOSE_BARBER)}>
              Choose a barber
            </Action>
          </ActionsRow>
        </Barbershop>
      )}

      {bookingStore.currentStep === STEP_CHOOSE_BARBER ? (
        <ContentContainer>
          <CardGrid>
            <Card onClick={() => {
              bookingStore.setBarber(barbers[0]);
              bookingStore.toServiceStep();
            }}
            >
              <BarberPhoto src="" />
              <BarberName>Alex K.</BarberName>
              <AvailabilityStatus>
                <Status>Available today</Status>
              </AvailabilityStatus>
              <AboutBarberLink href="#">About Alex</AboutBarberLink>
            </Card>
          </CardGrid>
        </ContentContainer>
      ) : null}

      {bookingStore.currentStep === STEP_CHOOSE_SERVICE ? (
        <ContentContainer>
          <CardGrid>
            <ThemeProvider
              theme={
                bookingStore.service === bookingStore.barber?.services[0]
                  ? serviceThemes.selected
                  : serviceThemes.initial
              }
            >
              <ServiceCard
                onClick={() => {
                  bookingStore.setService(bookingStore.barber.services[0]);
                }}
              >
                <ServiceName>Advanced style scissor cut</ServiceName>
                <ServiceInfo>
                  <Duration>
                    1 hr and 30 min
                  </Duration>
                  <Price>$75</Price>
                </ServiceInfo>
              </ServiceCard>
            </ThemeProvider>
          </CardGrid>
        </ContentContainer>
      ) : null}
    </Layout>
  </>
));

export { App };
