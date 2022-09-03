import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlbumWrapper = styled.div`
  margin: 40px 0;
`;

export const PublishedDateText = styled.div`
  margin-bottom: 24px;
  font-weight: 300;
`;

export const BackToAlbums = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  padding: 16px;
  margin-top: 16px;
  display: inline-block;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.black};
  border-radius: 12px;
`;
