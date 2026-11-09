import {
  ArrowRight,
  ArrowUpRight,
  BusFront,
  Check,
  ClipboardCheck,
  Clock3,
  Building2,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  School,
  ShieldCheck,
  Users,
} from 'lucide-react';
import RideChimeDemo from './ridechime-demo';

const chat =
  'https://wa.me/256703664233?text=Hello%20RideChime%2C%20I%20would%20like%20to%20learn%20about%20the%20RideChime%20school%20pilot.';
const signIn = 'https://app.ridechime.com/login';

const nav = [
  ['#how-it-works', 'How it works'],
  ['#schools', 'Schools & operators'],
  ['#families', 'Families'],
  ['#questions', 'Questions'],
] as const;

const steps = [
  {n: '01', icon: Route, title: 'Plan the journey', body: 'Agree pickup places, order the stops and review the suggested roads with your school.'},
  {n: '02', icon: ClipboardCheck, title: 'Record boarding', body: 'The school attendant confirms when each child boards and leaves the vehicle. Card readers can come later.'},
  {n: '03', icon: MapPin, title: 'Review the journey', body: 'Planned routes, available live locations and staff confirmations sit together in one place.'},
];

const pilot = [
  {icon: BusFront, title: 'Choose a vehicle', body: 'Check the vehicle hardware, connection and location reporting against a known place.'},
  {icon: Route, title: 'Agree the route', body: 'Confirm pickup places, timings and road suitability with the school.'},
  {icon: Users, title: 'Bring the team', body: 'Name the people responsible for attendance, handover and exceptions.'},
  {icon: Check, title: 'Review together', body: 'Test a supervised journey and agree the next steps before family rollout.'},
];

const faqs = [
  ['What is RideChime?', 'RideChime is a school transport live-location platform being piloted in Kampala, Uganda. It brings planned pickup routes, available live locations and staff-confirmed boarding records together for the school team. Family access and notification delivery are being prepared before rollout.'],
  ['Can RideChime show live locations for our 14-seater school van?', 'The pilot can be configured around a 14-seater van, minibus, car or bus used for school transport. We first verify its installed vehicle hardware and location reporting, then agree the pickup route and responsible staff with your school.'],
  ['Can transport operators use RideChime?', 'Yes. RideChime is a standalone service. A transport operator that runs vehicles for schools can bring each school onto RideChime, and every school keeps its own private workspace. Arrangements are agreed with each school before any records are added.'],
  ['How can parents see a school vehicle’s live location?', 'Parent access is being prepared for the RideChime pilot. Before families join, we need to verify reliable vehicle updates and each family’s permissions. The school will arrange access when these checks are complete.'],
  ['Can a vehicle’s live location confirm when a child boards or gets off?', 'A vehicle’s reported live location shows where it was when it sent its latest update; it does not prove that a child boarded or got off. RideChime’s pilot uses staff-confirmed boarding records. Compatible RFID card readers are an optional upgrade that needs separate installation and testing.'],
  ['Do parents need to download an app?', 'The pilot starts with the school team. Parent browser access and mobile apps are being prepared; family access will be arranged with the school when ready. No public self-registration is offered.'],
  ['Does every child need a tap-on card?', 'No. The pilot starts with staff-confirmed boarding records. Card readers are an optional upgrade, subject to compatible equipment, child-to-card mapping and testing.'],
  ['Are automatic WhatsApp updates included?', 'WhatsApp is our contact channel for enquiries and demos. Automated parent alerts are not included in the current pilot. Notification channels, including optional SMS, will be agreed before rollout.'],
  ['Will we see an exact arrival time?', 'Route planning can provide an estimated driving duration. It does not include pickup waits or live traffic. The pilot uses agreed pickup schedules and shows how recently the vehicle sent its last location update.'],
  ['How will you handle children’s information?', 'The pilot’s data purpose, authorised people, retention and responsibilities must be agreed with the school before real family use. A privacy notice and the applicable parent or guardian permissions form part of that preparation.'],
] as const;

function Brand() {
  return (
    <a className="rc-brand" href="/" aria-label="RideChime home">
      <img className="rc-brand-mark" src="/ridechime-mark.svg" alt="" width={40} height={40} />
      <span className="rc-brand-text">
        <span className="rc-wordmark"><span className="rc-word-ride">Ride</span><span className="rc-word-chime">Chime</span></span>
        <span className="rc-brand-tag">School journeys, connected</span>
      </span>
    </a>
  );
}

/* A calm product preview: an example route, live location and boarding register. Not live data. */
function ProductPreview() {
  return (
    <figure className="rc-preview" aria-label="Example RideChime journey view">
      <div className="rc-preview-bar">
        <span className="rc-preview-title"><BusFront size={16} aria-hidden="true" />Morning route A · Van 01</span>
        <span className="rc-pill rc-pill-live"><i aria-hidden="true" />In progress</span>
      </div>
      <div className="rc-preview-body">
        <div className="rc-preview-map">
          <svg viewBox="0 0 360 250" aria-hidden="true" focusable="false">
            <g className="rc-map-grid">
              {[40, 90, 140, 190].map((y) => <path key={y} d={`M0 ${y}H360`} />)}
              {[60, 140, 220, 300].map((x) => <path key={x} d={`M${x} 0V250`} />)}
            </g>
            <path className="rc-map-road" d="M18 214C70 206 84 160 128 150s86 14 112-26 70-58 104-64" />
            <path className="rc-map-route" d="M18 214C70 206 84 160 128 150s86 14 112-26 70-58 104-64" />
            <circle className="rc-map-stop done" cx="40" cy="208" r="7" />
            <circle className="rc-map-stop done" cx="128" cy="150" r="7" />
            <circle className="rc-map-stop" cx="252" cy="108" r="7" />
            <rect className="rc-map-school" x="330" y="46" width="20" height="20" rx="5" />
          </svg>
          <span className="rc-map-vehicle" style={{left: '53%', top: '50%'}}><BusFront size={15} aria-hidden="true" /></span>
          <span className="rc-map-chip" style={{left: '53%', top: '50%'}}><Clock3 size={13} aria-hidden="true" />Updated 2 min ago</span>
        </div>
        <div className="rc-preview-side">
          <p className="rc-preview-label">Boarding register</p>
          <ul className="rc-register">
            <li><span>Child A</span><span className="rc-pill rc-pill-ok"><i aria-hidden="true" />Boarded</span></li>
            <li><span>Child B</span><span className="rc-pill rc-pill-ok"><i aria-hidden="true" />Boarded</span></li>
            <li><span>Child C</span><span className="rc-pill rc-pill-wait"><i aria-hidden="true" />Next stop</span></li>
          </ul>
          <p className="rc-preview-note"><ShieldCheck size={14} aria-hidden="true" />Confirmed by the school attendant</p>
        </div>
      </div>
      <figcaption>Illustrative view with example data. Not a live vehicle.</figcaption>
    </figure>
  );
}

export default function RideChimeHome() {
  return (
    <div className="rc-site">
      <a className="rc-skip" href="#main">Skip to content</a>
      <header className="rc-header">
        <div className="rc-container rc-header-inner">
          <Brand />
          <nav className="rc-nav" aria-label="Main navigation">
            {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="rc-header-actions">
            <a className="rc-link-quiet" href={signIn}>Platform sign in<ArrowUpRight size={15} aria-hidden="true" /></a>
            <a className="rc-button rc-button-primary rc-button-compact" href="#demo">Book a demo</a>
          </div>
          <details className="rc-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
              <a href={signIn}>Platform sign in</a>
              <a className="rc-button rc-button-primary" href="#demo">Book a school demo</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="rc-hero">
          <div className="rc-container rc-hero-grid">
            <div className="rc-hero-copy">
              <p className="rc-eyebrow">School transport · Kampala, Uganda</p>
              <h1>Live locations and boarding records for every school journey.</h1>
              <p className="rc-lead">RideChime brings pickup routes, vehicle live locations and staff-confirmed boarding into one place for vans, minibuses, cars and buses. Explore our supervised pilot for schools and transport operators.</p>
              <div className="rc-hero-actions">
                <a className="rc-button rc-button-primary" href="#demo">Book a school demo<ArrowRight size={18} aria-hidden="true" /></a>
                <a className="rc-button rc-button-secondary" href={chat}><MessageCircle size={18} aria-hidden="true" />Chat on WhatsApp</a>
              </div>
              <p className="rc-pilot-note"><span aria-hidden="true" />Now inviting schools for a supervised pilot.</p>
            </div>
            <ProductPreview />
          </div>
        </section>

        <section className="rc-strip" aria-label="What RideChime covers">
          <div className="rc-container rc-strip-grid">
            <p><MapPin size={18} aria-hidden="true" /><span><b>Live locations</b>See where the school vehicle last reported, and how recently.</span></p>
            <p><ClipboardCheck size={18} aria-hidden="true" /><span><b>Staff-confirmed boarding</b>Attendants record who boarded and who got off.</span></p>
            <p><LockKeyhole size={18} aria-hidden="true" /><span><b>Invitation-only access</b>Each school’s records stay in its own private workspace.</span></p>
          </div>
        </section>

        <section className="rc-section" id="how-it-works">
          <div className="rc-container">
            <div className="rc-section-head">
              <p className="rc-eyebrow">How it works</p>
              <h2>One clear record of the school run.</h2>
              <p>A useful record starts with a plan and the people who confirm what happens.</p>
            </div>
            <ol className="rc-steps">
              {steps.map(({n, icon: Icon, title, body}) => (
                <li key={n} className="rc-card">
                  <span className="rc-step-top"><span className="rc-step-n">{n}</span><Icon size={20} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rc-section rc-section-navy" id="schools">
          <div className="rc-container">
            <div className="rc-section-head rc-section-head-light">
              <p className="rc-eyebrow">Schools and transport operators</p>
              <h2>Built for the people who run school transport.</h2>
              <p>RideChime is an independent service. Schools can use it directly, and transport operators can bring the schools they serve.</p>
            </div>
            <div className="rc-audience">
              <article className="rc-audience-card">
                <School size={22} aria-hidden="true" />
                <h3>For schools</h3>
                <p>Plan pickup routes, review available live locations and record boarding. Your transport details stay in one shared view for your team.</p>
                <ul className="rc-checks">
                  <li><Check size={16} aria-hidden="true" />Plan routes and pickup places</li>
                  <li><Check size={16} aria-hidden="true" />Record who boarded and got off</li>
                  <li><Check size={16} aria-hidden="true" />Keep a clear correction history</li>
                  <li><Check size={16} aria-hidden="true" />Confirm the physical empty-vehicle check</li>
                </ul>
              </article>
              <article className="rc-audience-card">
                <Building2 size={22} aria-hidden="true" />
                <h3>For transport operators</h3>
                <p>Run vehicles for one school or several. Each school you serve is set up in its own private workspace, agreed with that school.</p>
                <ul className="rc-checks">
                  <li><Check size={16} aria-hidden="true" />Vans, minibuses, cars and buses</li>
                  <li><Check size={16} aria-hidden="true" />Location reporting verified before rollout</li>
                  <li><Check size={16} aria-hidden="true" />School records kept separate</li>
                  <li><Check size={16} aria-hidden="true" />Supervised pilot before families join</li>
                </ul>
              </article>
            </div>
            <a className="rc-text-link rc-text-link-light" href="#demo">Talk to us about your school run<ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="rc-section" id="families">
          <div className="rc-container rc-split">
            <div>
              <p className="rc-eyebrow">Families</p>
              <h2>Start with the school. Prepare for parents.</h2>
              <p>The pilot starts with the school team: the route, the vehicle and the people recording boarding and handover.</p>
              <p>Before families join, we agree access and updates with the school and test the journey together. Clear information should come with a clear explanation of what it means.</p>
            </div>
            <aside className="rc-card rc-callout">
              <Clock3 size={20} aria-hidden="true" />
              <div>
                <h3>A timestamp matters.</h3>
                <p>A saved location is not always a current location. RideChime’s live view shows when the vehicle last reported its location.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="rc-section rc-section-tint">
          <div className="rc-container">
            <div className="rc-section-head">
              <p className="rc-eyebrow">The pilot</p>
              <h2>Your school. Your pilot.</h2>
              <p>A practical start, with the scope agreed before the first supervised journey.</p>
            </div>
            <ol className="rc-pilot">
              {pilot.map(({icon: Icon, title, body}) => (
                <li key={title} className="rc-card"><Icon size={20} aria-hidden="true" /><h3>{title}</h3><p>{body}</p></li>
              ))}
            </ol>
            <p className="rc-footnote"><ShieldCheck size={16} aria-hidden="true" />Optional card readers and notification channels are scoped separately. We explain what is ready before you commit.</p>
          </div>
        </section>

        <section className="rc-section" id="questions">
          <div className="rc-container rc-faq-wrap">
            <div className="rc-section-head">
              <p className="rc-eyebrow">Questions</p>
              <h2>Before your school begins.</h2>
              <p>Vehicle compatibility, family access and what RideChime can confirm during a supervised pilot.</p>
              <a className="rc-text-link" href={chat}>Ask our team on WhatsApp<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="rc-faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="rc-section rc-section-navy rc-demo" id="demo">
          <div className="rc-container rc-demo-grid">
            <div>
              <p className="rc-eyebrow">Book a school demo</p>
              <h2>Let’s look at your school run together.</h2>
              <p>Tell us about your school or transport service. We will walk you through RideChime and discuss a supervised pilot that fits your vehicles.</p>
              <a className="rc-contact" href="tel:+256703664233"><Phone size={18} aria-hidden="true" /><span><small>Call or WhatsApp</small>0703 664 233</span></a>
            </div>
            <RideChimeDemo />
          </div>
        </section>
      </main>

      <footer className="rc-footer">
        <div className="rc-container rc-footer-inner">
          <Brand />
          <p>School transport pilot · Kampala, Uganda</p>
          <a className="rc-link-quiet" href={signIn}>Platform sign in<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="rc-container rc-footer-base"><span>© {new Date().getFullYear()} RideChime</span></div>
      </footer>
    </div>
  );
}
