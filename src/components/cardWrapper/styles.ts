import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  width: 100%;
  align-items: flex-start;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 1px 7px -3px #000000;

  & > * {
    margin-right: 12px;
  }
`;
