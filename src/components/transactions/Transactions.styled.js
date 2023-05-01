import styled from 'styled-components';
export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 600px;
  margin-bottom: 100px;
`;
export const TableHead = styled.thead`
  background-color: ${p => p.theme.bgc[0]};
  height: 40px;
  color: ${p => p.theme.colors.white};
`;
export const Column = styled.tr``;
export const TableHeader = styled.th`
  text-align: center;
  border: 1px solid ${p => p.theme.colors.border};
`;
export const TableBody = styled.tbody`
  border: 1px solid ${p => p.theme.colors.border};
`;

export const TableBodyRow = styled.tr``;

export const Data = styled.td`
  text-align: center;
  border: 1px solid ${p => p.theme.colors.border};
  background-color: ${p =>
    (p.index + 1) % 2 === 0 ? p.theme.colors.accent : '#ffffff'};
`;
