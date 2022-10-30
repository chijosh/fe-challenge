import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > * {
    margin-right: 16px;
  }

  & > *:nth-child(1) {
    flex: 1 1 30%;
  }
  & > *:nth-child(2) {
    flex: 1 1 15%;
  }
  & > *:nth-child(3) {
    flex: 1 1 15%;
  }
  & > *:nth-child(4) {
    flex: 1 1 25%;
  }
`;
