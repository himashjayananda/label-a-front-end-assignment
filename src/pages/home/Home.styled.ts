import styled from 'styled-components';
import { breakpoints } from '../../globalStyled';

export const HomeWrapper = styled.div`
  margin: 40px 0;
`;

export const CardWrapper = styled.div`
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
