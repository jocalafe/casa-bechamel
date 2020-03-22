import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledCard = styled(Card)`
  background-color: white;
  text-align: center;
`;

export default function WelcomeCard() {
  return (
    <StyledCard>
      <h2>Comida hecha con amor, en tu casa u oficina.</h2>
      <div>Has tu pedido ya!</div>
    </StyledCard>
  )
}
