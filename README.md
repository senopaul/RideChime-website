# RideChime marketing website

Public, static marketing site for RideChime. The invite-only tracking application is maintained separately in the private `senopaul/RideChime` repository and will be served at `app.ridechime.com` after its custom domain is configured.

## Local development

Requires Node.js 22.13 or later.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

Next.js exports a static website into `out/`, suitable for Cloudflare Pages or another static host. Configure `ridechime.com` and `www.ridechime.com` on the marketing deployment, and configure `app.ridechime.com` on the separate application deployment. The marketing site is indexable; keep the authenticated application private and `noindex`.

## Current product claims

The page describes a supervised pilot and does not promise that every GPS device, automatic parent alert, family account, or live ETA is available. Confirm provider and device compatibility before making a rollout commitment.
