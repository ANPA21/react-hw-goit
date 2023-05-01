import styled from 'styled-components';

export const Statistics = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.accent};

  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px 0;
`;
export const StatTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const StatList = styled.ul`
  display: flex;
`;
export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;

  padding: 15px;

  background-color: ${p => p.theme.bgc[p.id]};

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: scale(1.1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ItemLabel = styled.span`
  color: ${p => p.theme.colors.white};
  margin-bottom: 5px;
`;
export const ItemInfo = styled.span`
  color: ${p => p.theme.colors.white};
  font-weight: 600;
`;
