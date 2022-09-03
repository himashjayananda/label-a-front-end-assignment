import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.nav`
  padding: 24px 0;
  border-bottom: 2px solid ${({ theme }) => theme.black};
`;

export const Logo = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;
