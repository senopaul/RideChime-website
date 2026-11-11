# RideChime design system

Shared by the marketing site (ridechime.com, repo `RideChime-website`) and the school transport app (app.ridechime.com, repo `RideChime`). Both repositories carry this same file. RideChime is an independent product: no Sky Worth names, logos, colours or links appear in either product.

## 1. Audit summary (baseline: website `main` 4eba374, app `main` 355efd2)

**Keep**
- The wordmark: "Ride" in deep navy, "Chime" in RideChime purple, set in a confident geometric sans.
- Purple as the brand colour and warm yellow as the school-transport accent.
- The honest product voice: supervised pilot, staff-confirmed boarding, what is and is not yet available.
- Invite-only sign-in through Cloudflare Access; the app's role-based screens; the light/dark toggle.
- Clear section structure on the marketing page (how it works, schools, families, questions, demo).

**Fix**
- Childish illustration: cartoon house, trees, heart and toy-style bus on both the marketing hero and the app sign-in. They undercut a professional SaaS message.
- Competing palettes: the app's base stylesheet is still a green template (`#285d47`, lime focus rings) with purple and a bright blue (`#2563eb`) layered on top through five more stylesheets. Primary buttons are blue on one screen, purple on another and brown on a third. Dashboard stat tiles each use a different tint.
- The marketing site uses two navies, three purples and three yellows; navigation links render in default browser blue.
- Oversized pill buttons and a 90px headline with a hand-drawn underline read as template, not product.
- Small, low-contrast secondary text (11 to 12px grey) on cards and in the app.
- The family portal has no styles for its cards, roster, location rows or notices, so the parent view renders as unstyled text.
- Copy lines that read as filler ("Less wondering. More clarity.", "Every child has someone waiting.", "A little clarity goes a long way.").
- The bus mark is busy at small sizes (chime arcs, road squiggle, hub caps, wheels) and loses its bus shape below 32px.

## 2. Brand

- **Mark:** a purple rounded tile with a white side-view school bus (three windows, driver window, yellow waist stripe, two wheels) and one short yellow chime arc above the roof. It must read as a school bus at 16px.
- **Wordmark:** "Ride" navy, "Chime" purple, no tagline in compact headers. Tagline when space allows: "School journeys, connected".
- **Voice:** plain, specific, calm. Say what happens and who does it. Marketing uses "live locations" and "vehicle location updates"; never "GPS tracking" or "tracker" in public text.

## 3. Tokens

```css
:root{
  /* brand */
  --rc-purple:#5b34b0;        /* primary actions, links, active nav. 7.3:1 on white */
  --rc-purple-hover:#4a2896;
  --rc-purple-soft:#f2edfb;   /* selected rows, info panels */
  --rc-purple-line:#ddd2f3;
  --rc-yellow:#ffc23d;        /* accent only: stripe, small markers, CTA on navy. Never body text */
  --rc-yellow-soft:#fdf4dc;
  /* neutrals */
  --rc-navy:#121a35;          /* headings, dark bands, app sidebar */
  --rc-navy-2:#1d2750;
  --rc-bg:#f6f6f9;  --rc-surface:#ffffff;  --rc-line:#e3e4ec;
  --rc-text:#141a2e;  --rc-text-2:#454b63;  --rc-text-3:#646a82;  /* 15:1, 8.6:1, 5.4:1 on white */
  /* states (always paired with a word) */
  --rc-ok:#1d7a4c; --rc-warn:#9a5a00; --rc-danger:#b4261a;
  --rc-focus:#7b57e0;
  --rc-radius:10px; --rc-radius-lg:14px;
  --rc-shadow:0 1px 2px rgba(18,26,53,.06),0 8px 24px rgba(18,26,53,.06);
}
[data-theme=dark]{
  --rc-bg:#0c1022; --rc-surface:#141a30; --rc-line:#272f4d;
  --rc-text:#eef0f8; --rc-text-2:#bcc1d6; --rc-text-3:#9aa0b8;
  --rc-purple:#8c6be6; --rc-purple-hover:#a286ef; --rc-purple-soft:#211a40; --rc-purple-line:#3a2f66;
  --rc-navy:#0a0e1d; --rc-navy-2:#161d3a; --rc-focus:#a98cf2;
}
```

## 4. Type

- **Manrope** 600 to 800 for headings and the wordmark; **DM Sans** 400 to 600 for text. Both are already used by the app.
- Scale: 13 small, 15 body (app 14), 17 lead, 20/24/32 headings; marketing display 44 to 60. Body line height 1.6. Minimum text size 13px; secondary text uses `--rc-text-3` or darker.

## 5. Components

- **Buttons:** 44px tall (40 compact), 10px radius. Primary purple; secondary white with a line border; tertiary text link. On navy bands the primary action may use yellow with navy text. One primary action per view.
- **Cards:** white surface, 1px line, 14px radius, small shadow. No coloured tints per card; colour appears only in icons and status pills.
- **Status pills:** word plus a coloured dot; never colour alone.
- **Tables:** sticky header, 13px uppercase header labels, 48px rows, zebra-free with line separators; horizontal scroll inside the card on phones.
- **Forms:** label above field, 44px fields, visible focus ring, help text under the field, errors in red with an explanation of the fix.
- **Empty states:** icon, one sentence about what will appear here, one action.
- **Navigation (app):** navy sidebar on desktop with purple active marker; bottom tab bar on phones; account, theme toggle and sign-out together.

## 6. First screens

- Marketing: header, hero with a product preview instead of a cartoon, how-it-works, schools and transport operators, families, questions, demo request, footer.
- App: sign-in, staff overview (shell, stat tiles, journey board, empty states), family portal, owner first-run setup.

## 7. Rules for both repos

Visual changes only: no change to authentication, database schema, APIs, tenant boundaries, permissions, or location and boarding logic. Use existing frameworks and assets; no new dependencies for decoration. Both themes must stay readable; keyboard focus is always visible.

## 8. Friendly accents (v2)

Added after review so the products feel welcoming to teachers, parents and children while staying calm. Each accent has one meaning and is used for icons, chips, thin bars and soft panels, never for long body text.

| Token | Value | Soft | Text on soft | Meaning |
|---|---|---|---|---|
| `--rc-sun` | `#ffc23d` | `#fff4d4` | `#8a5a00` | The school bus, vehicles, highlights, CTA on purple |
| `--rc-coral` | `#ff7a5c` | `#ffe9e3` | `#b8402a` | Children and families |
| `--rc-mint` | `#2fb985` | `#dcf6ea` | `#14724f` | Boarded, done, routes |
| `--rc-sky` | `#4aa3ff` | `#e3f0ff` | `#1d5fae` | Journeys and live location |

Neutrals warm slightly toward purple: background `#fbfaff`, line `#e7e4f3`, ink (dark bands, app sidebar) `#1e1b4b`. The marketing hero uses a flat illustration (bus, children at stops, school) labelled as example data; no photography of real children.
