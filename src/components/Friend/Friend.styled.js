import styled from 'styled-components';

export const Status = styled.span`
  color: ${p => (p.status ? p.theme.colors.online : p.theme.colors.offline)};
`;
export const Image = styled.img`
  border-radius: ${p => p.theme.radius.medium};
  border: 1px solid ${p => p.theme.colors.border};
`;
export const Name = styled.p`
  color: ${p => p.theme.colors.black};
  font-size: 14px;
  font-weight: 500;
`;
