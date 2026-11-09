'use client';
import {useState} from 'react';
import {ArrowUpRight, MessageCircle} from 'lucide-react';

// Opens WhatsApp with the enquiry. Nothing is stored or sent by this page.
export default function RideChimeDemo() {
  const [school, setSchool] = useState('');
  const [vehicles, setVehicles] = useState('1');
  return (
    <form
      className="rc-demo-form"
      onSubmit={(e) => {
        e.preventDefault();
        const text = `Hello RideChime, I would like a RideChime school demo. School: ${school.trim()}. Vehicles: ${vehicles}. Please share the supervised pilot details.`;
        window.location.assign('https://wa.me/256703664233?text=' + encodeURIComponent(text));
      }}
    >
      <label htmlFor="ridechime-school">
        School or transport service
        <input id="ridechime-school" name="school" value={school} onChange={(e) => setSchool(e.target.value)} required maxLength={120} autoComplete="organization" placeholder="For example, Acacia Primary School" />
      </label>
      <label htmlFor="ridechime-vehicles">
        How many school vehicles?
        <select id="ridechime-vehicles" name="vehicles" value={vehicles} onChange={(e) => setVehicles(e.target.value)}>
          <option value="1">One vehicle</option>
          <option value="2–5">2–5 vehicles</option>
          <option value="6–10">6–10 vehicles</option>
          <option value="11+">More than 10 vehicles</option>
        </select>
      </label>
      <button className="rc-button rc-button-accent" type="submit">
        <MessageCircle size={18} aria-hidden="true" />Request a demo on WhatsApp<ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p>Opens WhatsApp with your enquiry so you can review and send it. This form does not store your details.</p>
    </form>
  );
}
