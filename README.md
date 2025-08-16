# jorniqo-site

A ready-to-deploy Next.js + Tailwind project for **jorniqo** (bilingual EN/ES, dark mode, animations).

## Quick Start

1) Install Node.js (LTS) from https://nodejs.org  
2) Unzip this folder and open a terminal here.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1) Create a GitHub repo (public is fine), upload these files.  
2) Go to https://vercel.com → New Project → Import your repo → Deploy.

## Connect your GoDaddy domain

In GoDaddy DNS for your domain:

**A record**
- Name: @
- Value: 76.76.21.21
- TTL: 1 hour

**CNAME**
- Name: www
- Value: cname.vercel-dns.com
- TTL: 1 hour

Then, in Vercel → Project → Settings → Domains: add `yourdomain.com` and `www.yourdomain.com` and set www → root redirect.

## Customize

- Edit `app/page.jsx` → update brand object (email, phone, social, Calendly link), services, pricing, and case studies.
- The contact form stores submissions in `localStorage`. To send to email/CRM, connect to a form endpoint (Zapier, Formspree, Vercel serverless).

Enjoy 🚀
