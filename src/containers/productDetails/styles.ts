import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  min-height: 200px;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 7px -3px #000000;

  & > * {
    width: 20%;
    margin-right: 12px;
  }
`;
