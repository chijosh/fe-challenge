import styled from 'styled-components';

export const TableHeaderRow = styled.tr`
  text-align: left;
`;

export const CardContentTable = styled.table`
  font-family: Roboto;
  border-collapse: collapse;
  width: 100%;

  ${TableHeaderRow}:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;

  border: 1px solid #ddd;
  padding: 4px;
`;
export const CardDetail = styled.td`
  width: 20%;

  border: 1px solid #ddd;
  padding: 4px;
`;
