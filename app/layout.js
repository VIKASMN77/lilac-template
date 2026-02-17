import './globals.css';

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA',
  description: 'Licensed clinical psychologist in Santa Monica, CA. Anxiety therapy, trauma and EMDR therapy, burnout therapy. In-person and telehealth across California.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
