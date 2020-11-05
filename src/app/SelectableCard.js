import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SelectableCardLayout = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border: 1px solid #c7c7cc;
  border-radius: 16px;
  color: #000;
  transition: all 0.3s 0s ease-out;

  &:hover {
    border: 1px solid #e1e1e1;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  ${({ isSelected }) => isSelected && css`
    /* stylelint-disable */
    background-color: #161616;
    color: #ffffff;

    &:hover {
      background-color: #161616;
      box-shadow: none;
    }
  `}
`;

const SelectableCard = ({
  isSelected, onClick, children, className,
}) => (
  <SelectableCardLayout
    isSelected={isSelected}
    className={className}
    onClick={onClick}
  >
    {children}
  </SelectableCardLayout>
);

SelectableCard.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

SelectableCard.defaultProps = {
  isSelected: false,
};

export { SelectableCard };