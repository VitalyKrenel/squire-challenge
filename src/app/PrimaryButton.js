import styled from 'styled-components';

const PrimaryButton = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  border: none;
  border: 3px solid transparent;
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

  &:focus {
    border: 3px solid #007fff;
    outline: none;
  }

  &:hover {
    border: 3px solid #000;
    background: transparent;
    color: #000;
  }

  &:active {
    height: 44px;
  }
`;

export { PrimaryButton };
