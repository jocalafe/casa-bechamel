import { createGlobalStyle } from 'styled-components';
import { CasaBechamelTheme } from './theme';

export default createGlobalStyle<{ theme: CasaBechamelTheme }>`
  html, body {
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.color.background};
  }
`
