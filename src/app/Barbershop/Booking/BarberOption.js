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
  position: relative;
  color: #006bb2;
  font-family: SF Pro Display, sans-serif;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s 0s ease-in-out;

  &::after {
    position: absolute;
    right: 0;
    bottom: -6px;
    left: 0;
    height: 0;
    background-color: #006bb2;
    content: '';
  }

  &:hover::after {
    height: 2px;
  }
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
    <AboutBarberLink
      href="#"
    >
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
