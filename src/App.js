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
import { BarbershopHero } from './BarbershopHero';

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  padding-top: 70px;
`;

const App = observer(() => (
  <AppLayout hasBackgroundImage={!bookingStore.currentStep}>
    {bookingStore.currentStep === null ? (
      <BarbershopHero />
    ) : (
      <Section>
        {bookingStore.currentStep === STEP_CHOOSE_BARBER && (
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
        )}

        {bookingStore.currentStep === STEP_CHOOSE_SERVICE && (
          <OptionsGrid heading="Choose a service" collection={bookingStore.barber?.services || services}>
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
        )}

        {bookingStore.barber && bookingStore.service && (
          <Order service={bookingStore.service} barber={bookingStore.barber} />
        )}
      </Section>
    )}
  </AppLayout>
));

export { App };
