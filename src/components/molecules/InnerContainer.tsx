import styled from 'styled-components';

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  text-align: center;
  height: 70%;
  justify-content: center;
  align-items: center;

  .container__header {
    flex: 1;
    justify-content: flex-start;
  }

  .container__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 60%;
  }
`;

export default InnerContainer;
