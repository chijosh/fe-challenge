import styled from 'styled-components';

export const TableRow = styled.tr`
  text-align: center;
`;

export const CardContentTable = styled.table`
  font-family: Roboto;
  border-collapse: collapse;
  width: 100%;

  & > *:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;

  border: 1px solid #ddd;
  padding: 4px;
`;
export const CardDetail = styled.td`
  width: 20%;

  border: 1px solid #ddd;
  padding: 4px;
`;

export const CardDetailBtn = styled.td`
  width: 5%;
  text-align: center;
  border: 1px solid #ddd;
  padding: 4px;
`;
