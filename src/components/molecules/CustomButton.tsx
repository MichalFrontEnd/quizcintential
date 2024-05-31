import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #e0e0e0 !important;
  border: 2px solid #333 !important;
  color: #333 !important;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;


  &:hover {
    background-color: #d0d0d0 !important;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #c0c0c0 !important;
    transform: translateY(2px);
  }
`;

const CustomButton: React.FC<ButtonProps & { onClick?: () => void }> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default CustomButton;
