import 'regenerator-runtime/runtime';

import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { bookingStore, STEP_CHOOSE_SERVICE, STEP_CHOOSE_BARBER } from './Booking/BookingStore';
import { barbershopStore } from './BarbershopStore';

import { BarbershopPageLayout as BarbershopLayout } from './BarbershopPageLayout';
import { Order } from './Booking/Order';
import { OptionsGrid } from '~/src/app/OptionsGrid';
import { ServiceOption } from './Booking/ServiceOption';
import { BarberOption } from './Booking/BarberOption';
import { BarbershopHero } from './BarbershopHero';

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  padding-top: 70px;
  margin-bottom: 200px;
`;

const BarbershopPage = observer(() => (
  <BarbershopLayout
    hasBackgroundImage={!bookingStore.currentStep}
    isLoading={barbershopStore.isLoading}
  >
    {bookingStore.currentStep === null ? (
      <BarbershopHero />
    ) : (
      <Section>
        {bookingStore.currentStep === STEP_CHOOSE_BARBER && (
          <OptionsGrid
            heading="Choose a barber"
            collection={bookingStore.availableBarbers}
          >
            {(barber) => (
              <BarberOption
                key={barber.id}
                isSelected={bookingStore.barber?.id === barber.id}
                barber={barber}
                onClick={async () => {
                  bookingStore.setBarber(barber);
                  await barbershopStore.fetchServices();
                  bookingStore.toServiceStep();
                }}
              />
            )}
          </OptionsGrid>
        )}

        {bookingStore.currentStep === STEP_CHOOSE_SERVICE && (
          <OptionsGrid
            heading="Choose a service"
            collection={bookingStore.availableServices}
          >
            {(service) => (
              <ServiceOption
                key={service.id}
                isSelected={bookingStore.service?.id === service.id}
                service={service}
                onClick={async () => {
                  bookingStore.setService(service);
                  await barbershopStore.fetchBarbers();
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
  </BarbershopLayout>
));

export { BarbershopPage };
