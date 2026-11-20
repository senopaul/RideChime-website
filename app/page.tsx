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
      telephone: '+256709469230',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Sky Worth Ltd',
        legalName: 'SKY WORTH LIMITED',
        url: 'https://sky-worths.com/',
        foundingDate: '2014-01-27',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kabalagala Market, Shop 15B',
          addressLocality: 'Kampala',
          addressCountry: 'UG'
        }
      }
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
