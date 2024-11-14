import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

export default function About() {
  return (
    <>
      <Navbar />
      <AboutSection>
        <h2>About CyberSakti</h2>
        <p>CyberSakti is MIT ADT University's Cybersecurity Cell focused on educating students on cybersecurity fundamentals.</p>
      </AboutSection>
      <Footer />
    </>
  );
}
