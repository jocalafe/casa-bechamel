import React from 'react';
import Card from './Card';

export default function WelcomeCard() {
  return (
    <Card>
      <Card.Heading text="Comida hecha con amor, en tu casa u oficina." />
      <Card.Body>Has tu pedido ya!</Card.Body>
    </Card>
  )
}
