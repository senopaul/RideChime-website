import RideChimeHome from './ridechime-home';

const origin = 'https://ridechime.com';
const description = 'School transport live locations in Uganda for vans, minibuses, cars and buses. Explore RideChime’s vehicle location updates, pickup routes and boarding-record pilot.';
const identity = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: 'RideChime',
      url: origin,
      telephone: '+256703664233'
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      name: 'RideChime',
      url: `${origin}/`,
      description,
      publisher: { '@id': `${origin}/#organization` },
      inLanguage: 'en-UG'
    }
  ]
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identity).replace(/</g, '\\u003c') }} /><RideChimeHome /></>;
}
