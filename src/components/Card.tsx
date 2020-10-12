import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  text-align: center;

  :hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps): JSX.Element {
  return <StyledCard className={className}>{children}</StyledCard>;
}

const StyledHeading = styled.h2`
  font-weight: normal;
`;

function Heading({ text }: { text: string }) {
  return <StyledHeading>{text}</StyledHeading>;
}

const StyledBody = styled.div`
  padding: 20px;
`;

function Body({ children }: { children: React.ReactNode }) {
  return <StyledBody>{children}</StyledBody>;
}

Card.Heading = Heading;
Card.Body = Body;
