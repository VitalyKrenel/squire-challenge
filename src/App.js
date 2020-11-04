import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { bookingStore, STEP_CHOOSE_SERVICE, STEP_CHOOSE_BARBER } from './BookingStore';
import { barbers } from '~/api/barbers';
import { services } from '~/api/services';
import { AppLayout } from './AppLayout';
import { Order } from './Order';
import { OptionsGrid } from './OptionsGrid';
import { ServiceOption } from './ServiceOption';
import { BarberOption } from './BarberOption';

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

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  padding-top: 70px;
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
            <BarberOption
              isSelected={bookingStore.barber?.id === barber.id}
              barber={barber}
              onClick={() => {
                bookingStore.setBarber(barber);
                bookingStore.toServiceStep();
              }}
            />
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
            <ServiceOption
              isSelected={bookingStore.service?.id === service.id}
              service={service}
              onClick={() => {
                bookingStore.setService(service);
                bookingStore.toBarberStep();
              }}
            />
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
