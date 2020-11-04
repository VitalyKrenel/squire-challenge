import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { bookingStore } from './BookingStore';

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

const BarbershopHero = observer(() => (
  <Barbershop>
    <BarbershopName>X-CUTZ Barbershop</BarbershopName>
    <Address>
      <AddressLine>4791  Lowndes Hill Park Road</AddressLine>
      <AddressLine>Bakersfield, CA 93307</AddressLine>
    </Address>

    <ActionsRow>
      <Action onClick={() => bookingStore.toServiceStep()}>
        Choose a service
      </Action>
      <Action onClick={() => bookingStore.toBarberStep()}>
        Choose a barber
      </Action>
    </ActionsRow>
  </Barbershop>
));

export { BarbershopHero };
