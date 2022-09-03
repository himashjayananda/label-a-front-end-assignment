import { FC } from 'react';
import { HeaderWrapper, Logo } from './Header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <Logo to='/'>Coldplay</Logo>
    </HeaderWrapper>
  );
};

export default Header;
