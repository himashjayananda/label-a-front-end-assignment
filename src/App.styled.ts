import styled from 'styled-components';
import { breakpoints } from './globalStyled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: ${breakpoints.sm}) {
    max-width: 576px;
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: 768px;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 1024px;
  }

  @media (min-width: ${breakpoints.xl}) {
    max-width: 1280px;
  }
`;
