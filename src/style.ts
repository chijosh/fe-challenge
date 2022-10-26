import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 12px;

  & > * {
    margin-bottom: 12px;
  }
`;
