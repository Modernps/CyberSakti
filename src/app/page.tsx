import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <h1>Welcome to CyberSakti</h1>
        <p>Your guide to cybersecurity awareness at MIT ADT University.</p>
      </Main>
      <Footer />
    </>
  );
}
