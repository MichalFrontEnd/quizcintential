import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: var(--neutral-light-color) !important;
  border: 4px solid var(--neutral-dark-color) !important;
  border-bottom: 8px solid var(--neutral-dark-color) !important;
  border-radius: 1px;
  box-shadow: 0 4px 2px -2px gray;
  color: #fff !important;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 1rem;

  
  &:hover {
    background-color: var(--neutral-accent-color) !important;
    transform: translateY(-5px);
  }
  
  &:active {
    background-color: #c0c0c0 !important;
    transform: translateY(5px);
  }
`;

const CustomButton: React.FC<ButtonProps & { onClick?: () => void }> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default CustomButton;
