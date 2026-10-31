import RideChimeHome from './ridechime-home';

const origin = 'https://ridechime.com';
const description = 'School transport tracking in Uganda for vans, minibuses, cars and buses. Explore RideChime’s GPS, pickup route and boarding-record pilot.';
const identity = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sky-worths.com/#operator',
      name: 'SKY WORTH LIMITED',
      url: 'https://sky-worths.com',
      telephone: '+256703664233'
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      name: 'RideChime',
      url: `${origin}/`,
      description,
      publisher: { '@id': 'https://sky-worths.com/#operator' },
      inLanguage: 'en-UG'
    }
  ]
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identity).replace(/</g, '\\u003c') }} /><RideChimeHome /></>;
}
