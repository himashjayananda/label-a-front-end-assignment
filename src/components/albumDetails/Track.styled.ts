import styled from 'styled-components';

export const TrackWrapper = styled.nav`
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: 12px;
  transition: 150ms ease-in;

  &:hover {
    background: ${({ theme }) => theme.bgHover};
  }
`;
