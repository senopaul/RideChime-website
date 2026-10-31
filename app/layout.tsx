import type { Metadata } from 'next';
import './ridechime.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ridechime.com'),
  title: 'RideChime | School Transport Tracking in Uganda',
  description: 'School transport tracking in Uganda for vans, minibuses, cars and buses. Explore RideChime’s GPS, pickup route and boarding-record pilot.',
  applicationName: 'RideChime',
  openGraph: {
    type: 'website',
    siteName: 'RideChime',
    title: 'RideChime | School Transport Tracking in Uganda',
    description: 'GPS locations, pickup routes and staff-confirmed boarding records for school transport.',
    url: 'https://ridechime.com/',
    locale: 'en_UG'
  },
  twitter: {
    card: 'summary',
    title: 'RideChime | School Transport Tracking in Uganda',
    description: 'GPS locations, pickup routes and staff-confirmed boarding records for school transport.'
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-UG"><body>{children}</body></html>;
}
