import './globals.css';

export const metadata = {
  title: 'Mind Shield - CBT Self-Defense',
  description: 'Website Self Defense Berbasis Strategi Cognitive Behavioral Therapy untuk Mengurangi Tindakan Self-Injury',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}