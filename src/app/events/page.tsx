import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import styled from 'styled-components';

const EventsSection = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

export default function Events() {
  return (
    <>
      <Navbar />
      <EventsSection>
        <h2>Upcoming Events</h2>
        <p>Stay tuned for our upcoming workshops, webinars, and events focused on cybersecurity.</p>
      </EventsSection>
      <Footer />
    </>
  );
}
