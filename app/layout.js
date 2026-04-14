import './globals.css';

export const metadata = {
  title: 'Mind Shield - CBT Self-Defense',
  description: 'Website Self Defense Berbasis Strategi Cognitive Behavioral Therapy untuk Mengurangi Tindakan Self-Injury',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <div style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          padding: '8px 16px',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
          borderTopLeftRadius: '12px',
          borderTop: '1px solid var(--border)',
          borderLeft: '1px solid var(--border)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          zIndex: 9999,
          boxShadow: '-2px -2px 10px rgba(0,0,0,0.03)'
        }}>
          Aplikasi ini buatan <a href="https://alfajri.my.id/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', fontWeight: 600, textDecoration: 'none'}}>alfajri</a>
        </div>
      </body>
    </html>
  );
}