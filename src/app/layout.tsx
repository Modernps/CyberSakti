import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { GlobalStyle } from '@/app/styles/GlobalStyle';
import { theme } from '@/app/styles/theme';

export const metadata = {
  title: 'CyberSakti - MIT ADT University',
  description: 'Cybersecurity Cell for educating students in MIT ADT University',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
