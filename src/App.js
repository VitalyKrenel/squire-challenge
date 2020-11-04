import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { bookingStore, STEP_CHOOSE_SERVICE, STEP_CHOOSE_BARBER } from './BookingStore';
import { barbers } from '~/api/barbers';
import { services } from '~/api/services';
import { AppLayout } from './AppLayout';
import { Order } from './Order';
import { OptionsGrid } from './OptionsGrid';
import { SelectableCard } from './SelectableCard';

const Barbershop = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 106px;
  margin: auto 0;
`;

const BarbershopName = styled.p`
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

const BarberPhoto = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
  border-radius: 8px;
`;

const BarberName = styled.p`
  margin: 0 0 8px;
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
  color: ${({ isSelected }) => isSelected && 'rgba(60, 60, 67, 0.6'};
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

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  padding-top: 70px;
`;

const ServiceCard = styled(SelectableCard)`
  min-height: 134px;
  align-items: flex-start;
  padding: 24px;
  transition: all 0.2s 0s ease-in-out;
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
  margin-top: auto;
`;

const Duration = styled.p`
  margin: 0;
  color: ${({ isSelected }) => isSelected && 'rgba(60, 60, 67, 0.6)'};
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  line-height: 22px;
`;

const ServicePrice = styled.p`
  margin: 0;
  font-family: SF Pro Display, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
`;

const App = observer(() => (
  <AppLayout hasBackgroundImage={!bookingStore.currentStep}>
    {!bookingStore.currentStep && (
      <Barbershop>
        <BarbershopName>X-CUTZ Barbershop</BarbershopName>
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
      <Section>
        <OptionsGrid heading="Choose a barber" collection={barbers}>
          {(barber) => (
            <SelectableCard
              isSelected={bookingStore.barber?.id === barber.id}
              onClick={() => {
                bookingStore.setBarber(barber);
                bookingStore.toServiceStep();
              }}
            >
              <BarberPhoto src={barber.photo} />
              <BarberName>
                {barber.firstName}
                {' '}
                {barber.lastName[0].concat('.')}
              </BarberName>
              <AvailabilityStatus>
                <Status>Available today</Status>
              </AvailabilityStatus>
              <AboutBarberLink href="#">
                About
                {' '}
                {barber.firstName}
              </AboutBarberLink>
            </SelectableCard>
          )}
        </OptionsGrid>

        {bookingStore.barber && bookingStore.service && (
          <Order service={bookingStore.service} barber={bookingStore.barber} />
        )}
      </Section>
    ) : null}

    {bookingStore.currentStep === STEP_CHOOSE_SERVICE ? (
      <Section>
        <OptionsGrid heading="Choose a service" collection={bookingStore.barber?.services[0] || services}>
          {(service) => (
            <ServiceCard
              isSelected={bookingStore.service?.id === service.id}
              onClick={() => {
                bookingStore.setService(service);
                bookingStore.toBarberStep();
              }}
            >
              <ServiceName>{service.name}</ServiceName>
              <ServiceInfo>
                <Duration isSelected={bookingStore.service?.id === service.id}>
                  1 hr and 30 min
                </Duration>
                <ServicePrice>
                  $
                  {service.price / 100}
                </ServicePrice>
              </ServiceInfo>
            </ServiceCard>
          )}
        </OptionsGrid>

        {bookingStore.barber && bookingStore.service && (
          <Order service={bookingStore.service} barber={bookingStore.barber} />
        )}
      </Section>
    ) : null}
  </AppLayout>
));

export { App };
