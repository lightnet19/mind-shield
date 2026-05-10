import './globals.css';

export const metadata = {
  title: 'Mind Shield — Konseling Online Berbasis CBT',
  description: 'Website Self Defense Berbasis Strategi Cognitive Behavioral Therapy (CBT) untuk Mengurangi Tindakan Self-Injury. Ruang aman digital untuk membantu siswa mengenali pikiran negatif, mengelola emosi, dan memperoleh dukungan konseling secara aman.',
  icons: { icon: '/logo-mindshield.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
