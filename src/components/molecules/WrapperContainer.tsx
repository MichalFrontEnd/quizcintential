import React from 'react';
import { Container, ContainerProps } from '@mantine/core';
import styled from 'styled-components';

const StyledWrapperContainer = styled(Container)`
    outline: 5px solid #691d04;
    border: 10px solid #db4206;
    background-color: #fffddd;
    position: relative;
    

    &::after {
        content: " ";
        position: absolute;
        z-index: 2;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border: 6px solid #c8ce9f;
        outline: 7px solid #82350b;
        pointer-events: none;
      }
`;

const WrapperContainer: React.FC<ContainerProps> = (props) => {
  return <StyledWrapperContainer {...props}>{props.children}</StyledWrapperContainer>;
};

export default WrapperContainer;
