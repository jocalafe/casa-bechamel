import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  background-color: rgba(255,223,46,1);
  justify-content: center;
`;

const StyledH1 = styled.h1`
  margin: 0;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>
        Casa Bechamel
      </StyledH1>
    </StyledHeader>
  );
}
