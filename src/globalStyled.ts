import { createGlobalStyle } from 'styled-components';

export const styledTheme = {
  black: '#252A34',
  white: '#fff',
  borderLight: '#f4eeff',
  bgHover: '#f7f9ff',
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

type ThemeType = {
  theme: typeof styledTheme;
};

export const GlobalStyle = createGlobalStyle<ThemeType>`
  *, *:before, *:after{
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.black}
  }
`;
