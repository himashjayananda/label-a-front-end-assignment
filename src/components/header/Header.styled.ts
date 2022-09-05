import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.nav`
  padding: 24px 0;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

export const BackToArtists = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  padding: 10px 16px;
  display: inline-block;
  color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 12px;
`;

export const NavLinkWrapper = styled.div`
  margin-left: 32px;
`;

export const CustomNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  margin-right: 24px;

  &.active {
    font-weight: 500;
  }
`;
