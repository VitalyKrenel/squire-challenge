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
  cursor: pointer;
  transition: all 0.3s 0s ease-out;

  /* stylelint-disable indentation */

  /* TODO: Fix incorrect working indentation inside tagged css */
  ${({ isSelected }) => !isSelected && css`
    &:hover {
      border: 1px solid #e1e1e1;
      background: #fff;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    }
`}

  ${({ isSelected }) => isSelected && css`
    background-color: #161616;
    color: #fff;

    &:hover {
      background-color: #161616;
      box-shadow: none;
    }
  `}
  /* stylelint-enable indentation */
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
