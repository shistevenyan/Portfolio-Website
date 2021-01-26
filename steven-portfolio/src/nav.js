import React from 'react';
import styled from 'styled-components';

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    background: black;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
`;

export default function Navbar() {
    return (
        <NavbarStyled>
            <div className="header">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </NavbarStyled>
    );
}