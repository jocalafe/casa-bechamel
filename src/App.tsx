import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import Header from './Header';
import WelcomeCard from './WelcomeCard';
import background from './assets/images/background.jpg';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const StyledContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <StyledContainer>
          <WelcomeCard />
        </StyledContainer>
      </StyledApp>
    </ThemeProvider>
  );
}
