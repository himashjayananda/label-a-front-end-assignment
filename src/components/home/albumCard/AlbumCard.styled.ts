import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlbumCardWrapper = styled(Link)`
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

export const AlbumImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const AlbumName = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 12px 0;
`;
