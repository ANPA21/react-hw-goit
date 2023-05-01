import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px 0;

  background-color: ${p => p.theme.colors.accent};
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 200px;

  align-items: center;
  gap: 10px;

  padding: 5px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radius.medium};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transform: scale(1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }
`;
