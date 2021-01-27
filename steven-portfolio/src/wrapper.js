import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 50px;
  }
  p {
    font-size:40px;
  }
`;

export default function Wrapper({ children }) {
    return <WrapperStyled>{children}</WrapperStyled>;
}