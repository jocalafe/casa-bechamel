import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import theme from '../components/theme';
import Header from '../components/Header';
import Card from '../components/Card';
import background from '../assets/images/background.jpg';

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

function WelcomeCard() {
  return (
    <Card>
      <Card.Heading text="Comida hecha con amor, en tu casa u oficina." />
      <Card.Body>Has tu pedido ya!</Card.Body>
    </Card>
  );
}

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <StyledApp>
        <Header />
        <StyledContainer>
          <WelcomeCard />
        </StyledContainer>
      </StyledApp>
    </ThemeProvider>
  );
}
