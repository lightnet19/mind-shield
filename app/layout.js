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
      <body>
        {children}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '8px 16px',
          borderRadius: '9999px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          fontSize: '12px',
          fontFamily: 'var(--font-main, sans-serif)',
          color: '#4b5563',
          zIndex: 9999,
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(229, 231, 235, 0.5)'
        }}>
          Made with Love ❤️ by <a href="https://alfajri.my.id/" target="_blank" rel="noopener noreferrer" style={{color: '#1a56db', fontWeight: '600', textDecoration: 'none'}}>alfajri</a>
        </div>
      </body>
    </html>
  );
}