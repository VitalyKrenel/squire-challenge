import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

/* TODO: Decide whether I need to re-use existent classes instead
         of duplicating this CSS code */

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

const ServicePrice = styled.p`
  margin: 0;
  font-family: SF Pro Display, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
`;

/* #TODO */

const OrderLayout = styled.div`
  display: flex;
  width: 412px;
  min-height: 660px;
  flex-direction: column;
  padding: 40px 32px;
  border: 1px solid #e1e1e1;
  margin-left: auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const Heading = styled.p`
  margin: 0 0 32px;
  font-family: SF Pro Display, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  line-height: 33px;
`;

const Details = styled.ul`
  padding: 0;
  margin: 0;
  counter-reset: order-line;
  list-style: none;
`;

const OrderLine = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;

  &::before {
    position: absolute;

    /* Visually align circle with barber's name */
    top: 2px;
    left: 0;
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;

    /* Visually align number with barber's name */
    padding: 2px 0 0;
    background-color: #000;
    border-radius: 50%;
    color: #fff;
    content: counter(order-line);
    counter-increment: order-line;
    font-family: SF Pro Display, sans-serif;
    font-size: 13px;
    font-weight: bold;
    line-height: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Barber = styled(BarberName)`
  margin: 0 0 0 32px;
`;

const Price = styled(ServicePrice)`
  margin: 0 0 0 auto;
  font-size: 20px;
  line-height: 24px;
`;

const Description = styled.p`
  margin: 0;
  color: #3c3c43;
  font-family: SF Pro Text, sans-serif;
  font-size: 17px;
  line-height: 22px;
`;

const ChooseTimeButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  margin-top: auto;
  background: #000;
  border-radius: 8px;
  color: #fff;
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  transition:
    all 0.2s 0s ease-out,
    height 0.1s 0s ease-in;

  &:hover,
  &:focus {
    border: 1px solid #000;
    background: #fff;
    color: #000;
    outline: none;
  }

  &:active {
    height: 44px;
  }
`;

const Order = observer(({ barber, service }) => (
  <OrderLayout>
    <Heading>Your order</Heading>
    <Details>
      <OrderLine>
        <Row>
          <Barber>{barber.firstName}</Barber>
          <Price>
            $
            {service.price / 100}
          </Price>
        </Row>
        <Description>
          {service.name}
        </Description>
      </OrderLine>
    </Details>

    <ChooseTimeButton>Choose a time</ChooseTimeButton>
  </OrderLayout>
));

Order.propTypes = {
  barber: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
  }).isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export { Order };
