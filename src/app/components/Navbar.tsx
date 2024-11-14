import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.card};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export const Navbar = () => (
  <NavbarContainer>
    <Logo>CyberSakti</Logo>
    <NavLinks>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
    </NavLinks>
  </NavbarContainer>
);
