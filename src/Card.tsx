import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.5);
  border-radius: 5px;
`;

export interface CardProps {
  className?: string,
  children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
  return <StyledCard className={ className }>{ children }</StyledCard>
};
