import styled from 'styled-components';

const BaseButton = styled.button`
  border: none;
  background-color: transparent;
  transition:
    all 0.2s 0s ease-out,
    height 0.1s 0s ease-in;

  &:focus,
  &:focus-within {
    box-shadow: 0 0 0 3px #007fff;
    outline: none;
  }
`;

const PrimaryButton = styled(BaseButton)`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  border: none;
  border: 1px solid transparent;
  margin-top: auto;
  background: #000;
  border-radius: 8px;
  color: #fff;
  font-family: SF Pro Text, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;

  &:hover {
    border: 1px solid #000;
    background: transparent;
    color: #000;
  }

  &:active {
    height: 44px;
  }
`;

export { PrimaryButton, BaseButton };
