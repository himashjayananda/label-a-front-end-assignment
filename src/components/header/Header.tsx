import { FC } from 'react';
import {
  CustomNavLink,
  HeaderWrapper,
  Logo,
  NavLinkWrapper,
} from './Header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Logo to='/'>Label A</Logo>
      <NavLinkWrapper>
        <CustomNavLink to='/'>Artists</CustomNavLink>
        <CustomNavLink to='/search-song'>Search for a song</CustomNavLink>
      </NavLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
