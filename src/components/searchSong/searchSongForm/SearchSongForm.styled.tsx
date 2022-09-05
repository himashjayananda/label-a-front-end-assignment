import styled from 'styled-components';

export const SearchSongFormWrapper = styled.form`
  margin-top: 32px;
`;

export const Searchbox = styled.input`
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid #ababab;
  min-width: 320px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  font-size: 16px;
  border: 0;
  border-radius: 6px;
  padding: 8px 12px;
  margin-left: 12px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.black};
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  margin-top: 12px;
`;
