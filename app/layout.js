// src/app/layout.js

// import '../i18n';
import './globals.css';
import ClientLayout from './ClientLayout';


export const metadata = {
  title: 'DatenDiva - Portfolio',
  description: 'A modern portfolio showcasing full-stack projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>

      </body>
    </html>
  );
}
