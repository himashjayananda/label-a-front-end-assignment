import styled from 'styled-components';
import { breakpoints } from '../../../globalStyled';

export const SongResultsWrapper = styled.div`
  margin-top: 24px;
`;

export const SongsWrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Song = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.borderLight};
  border-radius: 12px;
  text-align: center;
  transition: 150ms ease-in;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.bgHover};
  }
`;

export const ArtistName = styled.div`
  margin-top: 8px;
  font-weight: 700;
`;
