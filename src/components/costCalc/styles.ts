import styled from 'styled-components';

export const CostCalcContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 500px;
  /* flex-wrap: wrap; */

  & > * {
    margin-right: 8px;
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
  & > *:nth-child(3) {
    flex: 1 1 25%;
  }
`;
export const CostCalculator = styled.span`
  display: flex;
  margin-left: 8px;
`;
