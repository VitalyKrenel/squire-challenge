import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SelectableCard } from '~/src/app/SelectableCard';

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

const BarberOption = ({ barber, isSelected, onClick }) => (
  <SelectableCard
    isSelected={isSelected}
    onClick={onClick}
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
);

BarberOption.propTypes = {
  barber: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

BarberOption.defaultProps = {
  isSelected: false,
};

export { BarberOption };
