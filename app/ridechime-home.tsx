import {
  ArrowRight,
  ArrowUpRight,
  Backpack,
  BellRing,
  BusFront,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Building2,
  GraduationCap,
  Heart,
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
  ['#everyone', 'Who it’s for'],
  ['#schools', 'Schools & operators'],
  ['#questions', 'Questions'],
] as const;

const steps = [
  {n: '1', tone: 'sky', icon: Route, title: 'Plan the journey', body: 'Agree pickup places, order the stops and review the suggested roads with your school.'},
  {n: '2', tone: 'mint', icon: ClipboardCheck, title: 'Record boarding', body: 'The school attendant confirms when each child boards and leaves the vehicle. Card readers can come later.'},
  {n: '3', tone: 'sun', icon: MapPin, title: 'Review the journey', body: 'Planned routes, available live locations and staff confirmations sit together in one place.'},
] as const;

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
    <a className="rc-brand" href="./" aria-label="RideChime home">
      <img className="rc-brand-mark" src="ridechime-mark.svg" alt="" width={40} height={40} />
      <span className="rc-brand-text">
        <span className="rc-wordmark"><span className="rc-word-ride">Ride</span><span className="rc-word-chime">Chime</span></span>
        <span className="rc-brand-tag">School journeys, connected</span>
      </span>
    </a>
  );
}

/* One child waiting at a stop: head, uniform, backpack strap. Example scene only. */
function Child({x, y, skin, shirt}: {x: number; y: number; skin: string; shirt: string}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-11" y="0" width="22" height="26" rx="9" fill={shirt} />
      <rect x="-4" y="2" width="3" height="20" rx="1.5" fill="#1e1b4b" opacity=".25" />
      <circle cx="0" cy="-9" r="9" fill={skin} />
      <path d="M-9 -11a9 9 0 0 1 18 0c-3-3-6-4-9-4s-6 1-9 4z" fill="#1e1b4b" />
      <rect x="-9" y="25" width="7" height="10" rx="3" fill="#1e1b4b" />
      <rect x="2" y="25" width="7" height="10" rx="3" fill="#1e1b4b" />
    </g>
  );
}

/* Hero scene: a school bus on its morning route, children at stops, the school ahead. */
function HeroScene() {
  return (
    <figure className="rc-scene" aria-label="Illustration of a RideChime school journey with example updates">
      <svg viewBox="0 0 560 440" role="img" aria-hidden="true" focusable="false">
        <rect width="560" height="440" rx="28" fill="var(--rc-sky-wash)" />
        <circle cx="468" cy="78" r="40" fill="var(--rc-sun)" />
        <circle cx="468" cy="78" r="56" fill="var(--rc-sun)" opacity=".18" />
        <g fill="#fff" opacity=".9">
          <rect x="62" y="58" width="96" height="26" rx="13" />
          <rect x="92" y="44" width="48" height="26" rx="13" />
          <rect x="300" y="96" width="74" height="20" rx="10" />
        </g>
        <path d="M0 300C120 252 236 270 330 250s170-48 230-40v202a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28z" fill="var(--rc-hill)" />
        <path d="M0 352c90-28 200-38 300-26s190 6 260-20v106a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28z" fill="var(--rc-hill-2)" />
        {/* road */}
        <path d="M-10 378C90 352 150 320 250 312s190-14 250-70" fill="none" stroke="var(--rc-road)" strokeWidth="34" strokeLinecap="round" />
        <path d="M-10 378C90 352 150 320 250 312s190-14 250-70" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="14 14" strokeLinecap="round" opacity=".8" />
        {/* school */}
        <g transform="translate(452 150)">
          <rect x="0" y="40" width="88" height="66" rx="8" fill="#fff" />
          <path d="M-8 44L44 8l52 36z" fill="var(--rc-purple)" />
          <rect x="34" y="72" width="20" height="34" rx="4" fill="var(--rc-purple)" />
          <rect x="10" y="56" width="16" height="14" rx="3" fill="var(--rc-sky-soft-2)" />
          <rect x="62" y="56" width="16" height="14" rx="3" fill="var(--rc-sky-soft-2)" />
          <path d="M44 8V-18" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round" />
          <path d="M44 -18h22l-6 7 6 7H44z" fill="var(--rc-coral)" />
        </g>
        {/* stops with children */}
        <g>
          <circle cx="96" cy="345" r="9" fill="var(--rc-mint)" stroke="#fff" strokeWidth="3" />
          <circle cx="334" cy="296" r="9" fill="#fff" stroke="var(--rc-purple)" strokeWidth="4" />
          <Child x={330} y={228} skin="#8d5524" shirt="var(--rc-coral)" />
          <Child x={362} y={232} skin="#c68642" shirt="var(--rc-sky)" />
        </g>
        {/* bus */}
        <g transform="translate(150 236) rotate(-6)">
          <path d="M8 4h96a14 14 0 0 1 13 9l11 28v28a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V12a8 8 0 0 1 8-8z" fill="var(--rc-sun)" />
          <rect x="10" y="14" width="22" height="20" rx="4" fill="#2d2a63" />
          <rect x="38" y="14" width="22" height="20" rx="4" fill="#2d2a63" />
          <rect x="66" y="14" width="22" height="20" rx="4" fill="#2d2a63" />
          <path d="M96 14h8a4 4 0 0 1 3.7 2.5l6 17.5H96z" fill="#2d2a63" />
          <circle cx="21" cy="28" r="5" fill="#c68642" /><circle cx="49" cy="28" r="5" fill="#8d5524" /><circle cx="77" cy="28" r="5" fill="#e0ac69" />
          <rect x="0" y="44" width="128" height="7" fill="var(--rc-sun-deep)" />
          <rect x="118" y="54" width="8" height="6" rx="2" fill="#fff6d6" />
          <circle cx="28" cy="76" r="12" fill="#1e1b4b" /><circle cx="28" cy="76" r="5" fill="#fff" />
          <circle cx="100" cy="76" r="12" fill="#1e1b4b" /><circle cx="100" cy="76" r="5" fill="#fff" />
          <path d="M92 -14c7 2 12 6 15 12" fill="none" stroke="var(--rc-purple)" strokeWidth="4" strokeLinecap="round" />
          <path d="M98 -26c11 3 19 10 23 19" fill="none" stroke="var(--rc-purple)" strokeWidth="4" strokeLinecap="round" opacity=".5" />
        </g>
      </svg>
      <div className="rc-float rc-float-board">
        <span className="rc-float-icon mint"><CheckCircle2 size={18} aria-hidden="true" /></span>
        <span><b>Child A boarded</b><small>Ntinda stop · 7:12</small></span>
      </div>
      <div className="rc-float rc-float-live">
        <span className="rc-float-icon sky"><MapPin size={18} aria-hidden="true" /></span>
        <span><b>Van 01 · next stop Kisaasi</b><small>Location updated 1 min ago</small></span>
      </div>
      <figcaption>Illustration with example data. Not a live vehicle.</figcaption>
    </figure>
  );
}

/* What families will see once the school switches access on. Example data. */
function FamilyPhone() {
  return (
    <figure className="rc-phone" aria-label="Example family view">
      <div className="rc-phone-screen">
        <div className="rc-phone-top"><img src="ridechime-mark.svg" alt="" width={26} height={26} /><b>Good morning, Grace</b></div>
        <div className="rc-phone-child">
          <span className="rc-avatar coral">A</span>
          <span><b>Amara · P3</b><small>Morning route A</small></span>
          <span className="rc-pill rc-pill-ok"><i aria-hidden="true" />Boarded</span>
        </div>
        <div className="rc-phone-map">
          <svg viewBox="0 0 240 120" aria-hidden="true" focusable="false">
            <path d="M10 100C60 90 70 50 120 52s80-30 110-40" fill="none" stroke="var(--rc-line-strong)" strokeWidth="12" strokeLinecap="round" />
            <path d="M10 100C60 90 70 50 120 52" fill="none" stroke="var(--rc-purple)" strokeWidth="5" strokeLinecap="round" />
            <circle cx="120" cy="52" r="11" fill="var(--rc-sun)" stroke="#fff" strokeWidth="3" />
            <rect x="218" y="4" width="16" height="16" rx="4" fill="var(--rc-purple)" />
          </svg>
        </div>
        <p className="rc-phone-row"><Clock3 size={15} aria-hidden="true" />Van 01 · updated 1 min ago</p>
        <p className="rc-phone-row notice"><BellRing size={15} aria-hidden="true" />School: Friday pickup starts 10 minutes earlier.</p>
      </div>
      <figcaption>Family view in preparation. Example data.</figcaption>
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
            <a className="rc-link-quiet" href={signIn}>Sign in<ArrowUpRight size={15} aria-hidden="true" /></a>
            <a className="rc-button rc-button-primary rc-button-compact" href="#demo">Book a demo</a>
          </div>
          <details className="rc-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
              <a href={signIn}>Sign in</a>
              <a className="rc-button rc-button-primary" href="#demo">Book a school demo</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="rc-hero">
          <div className="rc-container rc-hero-grid">
            <div className="rc-hero-copy">
              <p className="rc-badge"><span aria-hidden="true" />Now inviting schools in Kampala</p>
              <h1>Every school ride, <span className="rc-hl">in sight and on record</span>.</h1>
              <p className="rc-lead">Live locations, staff-confirmed boarding and calm updates for schools, transport teams and families. RideChime works with the vans, minibuses and buses you already run.</p>
              <div className="rc-hero-actions">
                <a className="rc-button rc-button-primary" href="#demo">Book a school demo<ArrowRight size={18} aria-hidden="true" /></a>
                <a className="rc-button rc-button-secondary" href={chat}><MessageCircle size={18} aria-hidden="true" />Chat on WhatsApp</a>
              </div>
              <ul className="rc-hero-points">
                <li><span className="dot sky" aria-hidden="true" />Live locations</li>
                <li><span className="dot mint" aria-hidden="true" />Boarding records</li>
                <li><span className="dot coral" aria-hidden="true" />Private to each school</li>
              </ul>
            </div>
            <HeroScene />
          </div>
        </section>

        <section className="rc-section" id="everyone">
          <div className="rc-container">
            <div className="rc-section-head rc-center">
              <p className="rc-eyebrow">Made for everyone on the school run</p>
              <h2>One journey. Three people who care about it.</h2>
            </div>
            <div className="rc-people">
              <article className="rc-person purple">
                <span className="rc-person-icon"><GraduationCap size={26} aria-hidden="true" /></span>
                <h3>Teachers and school staff</h3>
                <p>See which vehicle is where, who has boarded and what still needs a check, without phone calls to the driver.</p>
                <ul><li><Check size={16} aria-hidden="true" />Boarding register in one tap</li><li><Check size={16} aria-hidden="true" />Routes and stops in one place</li><li><Check size={16} aria-hidden="true" />Empty-vehicle check at the end</li></ul>
              </article>
              <article className="rc-person coral">
                <span className="rc-person-icon"><Heart size={26} aria-hidden="true" /></span>
                <h3>Parents and guardians</h3>
                <p>Know when your child is on board and how recently the vehicle reported its location. Only your own children are shown.</p>
                <ul><li><Check size={16} aria-hidden="true" />Boarded and dropped-off records</li><li><Check size={16} aria-hidden="true" />Live location during the ride</li><li><Check size={16} aria-hidden="true" />Notices from the school</li></ul>
              </article>
              <article className="rc-person sun">
                <span className="rc-person-icon"><Backpack size={26} aria-hidden="true" /></span>
                <h3>Children</h3>
                <p>A calmer ride. The attendant knows who should be aboard at every stop, and the right grown-up is expected at drop-off.</p>
                <ul><li><Check size={16} aria-hidden="true" />Counted on and off the vehicle</li><li><Check size={16} aria-hidden="true" />Familiar stops and times</li><li><Check size={16} aria-hidden="true" />No app or phone needed</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="rc-section rc-section-soft" id="how-it-works">
          <div className="rc-container">
            <div className="rc-section-head">
              <p className="rc-eyebrow">How it works</p>
              <h2>One clear record of the school run.</h2>
              <p>A useful record starts with a plan and the people who confirm what happens.</p>
            </div>
            <ol className="rc-steps">
              {steps.map(({n, tone, icon: Icon, title, body}) => (
                <li key={n} className={`rc-card rc-step ${tone}`}>
                  <span className="rc-step-top"><span className="rc-step-icon"><Icon size={22} aria-hidden="true" /></span><span className="rc-step-n">Step {n}</span></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="rc-section" id="families">
          <div className="rc-container rc-split">
            <div>
              <p className="rc-eyebrow coral">For families</p>
              <h2>The morning message every parent wants.</h2>
              <p>When the school switches family access on, parents see their own child’s boarding record and the vehicle’s latest location, with the time it was last updated.</p>
              <p>We start with the school team, test the journey together, and only then invite families.</p>
              <div className="rc-callout">
                <Clock3 size={20} aria-hidden="true" />
                <p><b>A timestamp matters.</b> A saved location is not always a current location, so RideChime always shows when the vehicle last reported.</p>
              </div>
            </div>
            <FamilyPhone />
          </div>
        </section>

        <section className="rc-section rc-section-ink" id="schools">
          <div className="rc-container">
            <div className="rc-section-head rc-section-head-light">
              <p className="rc-eyebrow">Schools and transport operators</p>
              <h2>Built for the people who run school transport.</h2>
              <p>RideChime is an independent service. Schools can use it directly, and transport operators can bring the schools they serve.</p>
            </div>
            <div className="rc-audience">
              <article className="rc-audience-card">
                <span className="rc-audience-icon"><School size={22} aria-hidden="true" /></span>
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
                <span className="rc-audience-icon"><Building2 size={22} aria-hidden="true" /></span>
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
            <div className="rc-trust">
              <p><LockKeyhole size={18} aria-hidden="true" />Invitation-only access</p>
              <p><ShieldCheck size={18} aria-hidden="true" />Each school’s records kept private</p>
              <p><ClipboardCheck size={18} aria-hidden="true" />Boarding confirmed by people, not guessed</p>
            </div>
          </div>
        </section>

        <section className="rc-section">
          <div className="rc-container">
            <div className="rc-section-head">
              <p className="rc-eyebrow">The pilot</p>
              <h2>Your school. Your pilot.</h2>
              <p>A practical start, with the scope agreed before the first supervised journey.</p>
            </div>
            <ol className="rc-pilot">
              {pilot.map(({icon: Icon, title, body}, i) => (
                <li key={title} className="rc-card"><span className="rc-pilot-top"><span className="rc-pilot-icon"><Icon size={20} aria-hidden="true" /></span><span className="rc-pilot-n">{i + 1}</span></span><h3>{title}</h3><p>{body}</p></li>
              ))}
            </ol>
            <p className="rc-footnote"><ShieldCheck size={16} aria-hidden="true" />Optional card readers and notification channels are scoped separately. We explain what is ready before you commit.</p>
          </div>
        </section>

        <section className="rc-section rc-section-soft" id="questions">
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

        <section className="rc-section rc-demo" id="demo">
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
          <a className="rc-link-quiet" href={signIn}>Sign in<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="rc-container rc-footer-base"><span>© {new Date().getFullYear()} RideChime</span></div>
      </footer>
    </div>
  );
}
