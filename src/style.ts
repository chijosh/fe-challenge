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
export const CirclularContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
