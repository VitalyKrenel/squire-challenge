import styled from 'styled-components';

const PrimaryButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border: 1px solid transparent;
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
    background: transparent;
    color: #000;
    outline: none;
  }

  &:active {
    height: 44px;
  }
`;

export { PrimaryButton };
