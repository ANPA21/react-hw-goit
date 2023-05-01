import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radius.large};
  box-shadow: ${p => p.theme.shadow};
`;
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
`;
export const DescText = styled.p`
  color: ${p => p.theme.colors.secondary};
`;

export const DescTitle = styled.p`
  font-weight: 700;
  color: ${p => p.theme.colors.black};
`;

export const Image = styled.img`
  margin-bottom: 10px;
  border-radius: 100%;
  width: 100px;
`;
export const Stats = styled.ul`
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.colors.accent};
  border-top: 1px solid ${p => p.theme.colors.border};
  border-bottom-left-radius: ${p => p.theme.radius.large};
  border-bottom-right-radius: ${p => p.theme.radius.large};
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  padding: 15px;
  border-left: 1px solid ${p => p.theme.colors.border};
`;

export const StatsTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${p => p.theme.colors.secondary};
  margin-bottom: 5px;
`;
export const StatsText = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: 600;
  font-size: 16px;
`;
