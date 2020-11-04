import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SelectableCard } from './SelectableCard';

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

const ServiceOption = ({ service, isSelected, onClick }) => (
  <ServiceCard
    isSelected={isSelected}
    onClick={onClick}
  >
    <ServiceName>{service.name}</ServiceName>
    <ServiceInfo>
      <Duration isSelected={isSelected}>
        1 hr and 30 min
      </Duration>
      <ServicePrice>
        $
        {service.price / 100}
      </ServicePrice>
    </ServiceInfo>
  </ServiceCard>
);

ServiceOption.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export { ServiceOption };
