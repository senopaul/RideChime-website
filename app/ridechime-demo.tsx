'use client';
import {useRef, useState, type FormEvent} from 'react';
import {ArrowUpRight, MessageCircle} from 'lucide-react';

export default function RideChimeDemo() {
  const [school, setSchool] = useState('');
  const [vehicles, setVehicles] = useState('1');
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState('');
  const attempt = useRef<{key: string; id: string} | null>(null);

  const details = `School: ${school.trim()}\nVehicles: ${vehicles}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const data = new FormData(event.currentTarget);
    const contact = String(data.get('email') ?? '').trim();
    const key = JSON.stringify([contact, details]);
    if (attempt.current?.key !== key) attempt.current = {key, id: crypto.randomUUID()};
    setPending(true);
    setStatus('Sending your request…');
    try {
      const response = await fetch('/api/website-enquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: attempt.current.id, contact, details, website: data.get('website')}),
      });
      const result = await response.json();
      if (!response.ok || !result.reference) throw new Error('Enquiry failed');
      setStatus('Demo request received. Reference: ' + result.reference);
    } catch {
      setStatus('We could not confirm your request. Try again or contact us on WhatsApp.');
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="ridechime-demo-form" onSubmit={submit}>
      <label htmlFor="ridechime-school">School name
        <input id="ridechime-school" name="school" value={school} onChange={e => setSchool(e.target.value)} required maxLength={120} autoComplete="organization" placeholder="Your school’s name"/>
      </label>
      <label htmlFor="ridechime-vehicles">How many school vehicles?
        <select id="ridechime-vehicles" name="vehicles" value={vehicles} onChange={e => setVehicles(e.target.value)}>
          <option value="1">One vehicle</option>
          <option value="2–5">2–5 vehicles</option>
          <option value="6–10">6–10 vehicles</option>
          <option value="11+">More than 10 vehicles</option>
        </select>
      </label>
      <label htmlFor="ridechime-email">Work email
        <input id="ridechime-email" name="email" type="email" autoComplete="email" maxLength={254} required/>
      </label>
      <div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <button className="ridechime-button ridechime-button-yellow" type="submit" disabled={pending}>Request a demo<ArrowUpRight size={18}/></button>
      <p role="status">{status}</p>
      <p>We use your work email to follow up about your demo request.</p>
      <a className="ridechime-button" href={'https://wa.me/256703664233?text=' + encodeURIComponent('Hello RideChime, I would like a school demo.\n' + details)}>
        <MessageCircle size={19}/>Ask on WhatsApp
      </a>
    </form>
  );
}
