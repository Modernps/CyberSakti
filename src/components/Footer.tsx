import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.card};
  text-align: center;
`;

export const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 CyberSakti | MIT ADT University</p>
  </FooterContainer>
);
