# Berry Bank - Latin America's First Green Digital Bank

A modern, production-ready Next.js 15 website for Berry Bank featuring Sanity CMS, Stripe payments, and Resend for newsletters.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Actions, TypeScript)
- **CMS**: Sanity Studio v3
- **Styling**: Tailwind CSS v3.4+
- **Animation**: Framer Motion
- **State**: Zustand
- **Payments**: Stripe
- **Email**: Resend

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file with:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Resend
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=optional_audience_id
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 4. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## Project Structure

```
berry-bank/
├── app/
│   ├── (site)/           # Public pages
│   │   ├── page.tsx      # Home page
│   │   ├── privacy/      # Privacy policy
│   │   └── success/      # Checkout success
│   ├── api/              # API routes
│   │   ├── newsletter/   # Resend integration
│   │   └── checkout/     # Stripe checkout
│   └── studio/           # Sanity Studio
├── components/
│   ├── core/             # Layout & navigation
│   ├── modules/          # Page sections
│   └── shop/             # E-commerce components
├── lib/                  # Utilities & configs
└── sanity/               # Sanity schemas
```

## Design System

- **Primary (Berry Red)**: `#9E1916`
- **Accent (Growth Green)**: `#16A075`
- **Background (Void)**: `#0B0B0B`
- **Text (Mist)**: `#FAFAFA`
- **Font**: M PLUS 2

## Features

- ✅ Snap-scroll navigation
- ✅ Reactive pixel background animation
- ✅ Magnetic buttons & tilt cards
- ✅ Mobile floating dock
- ✅ Green Hub iframe embed
- ✅ E-commerce with cart
- ✅ Newsletter subscription
- ✅ FAQ accordion
- ✅ Team section
- ✅ Privacy policy page

## Company Info

**Berry Fintech, Inc.**
- Delaware C Corp
- Headquarters: Austin, TX
- Contact: contact@berrybank.app

## License

© 2024 Berry Fintech, Inc. All rights reserved.
