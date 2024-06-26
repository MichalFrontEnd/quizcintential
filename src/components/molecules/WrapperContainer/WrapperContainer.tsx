import React from "react";
import { Container, ContainerProps } from "@mantine/core";
import styled from "styled-components";

const StyledWrapperContainer = styled(Container)`
  outline: 5px solid var(--secondary-color);
  border: 10px solid var(--light-color);
  background-color: var(--background-color);
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: " ";
    position: absolute;
    z-index: 2;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 6px solid var(--primary-color);
    outline: 7px solid var(--dark-color);
    pointer-events: none;
  }
`;

export const WrapperContainer: React.FC<ContainerProps> = (props) => {
  return (
    <StyledWrapperContainer {...props}>{props.children}</StyledWrapperContainer>
  );
};

export default WrapperContainer;
