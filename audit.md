# Berry Bank — Full Site Audit

## 🔴 CRITICAL
1. Hero "Join Waitlist" → `#contact` doesn't exist on homepage
2. Hero "Learn More" → `#features` doesn't exist on homepage
3. Success page "Continue Shopping" → `/#shop` doesn't exist
4. Snap scrolling locks users, breaks mobile
5. Navigation.tsx is dead code (FlyoutNav replaced it but both exist)
6. Root sanity.config.ts is dead (studio uses sanity/sanity.config.ts)

## 🟡 MAJOR
7. Contact page: double footer (FooterSection + ContactSection footer)
8. Contact page: two conflicting FAQ datasets (inline + FAQ component)
9. Shop products are placeholders with no images, broken checkout
10. All CMS schemas seeded but data NEVER fetched (team, features, FAQs, products, greenHub URL)
11. aboutPage schema exists with no /about route
12. Phone "+1 (512) 555-0123" is a fake placeholder
13. FlyoutNav dropdown "Features" and "Company" href="#" → navigates to top
14. FooterSection uses <a> tags instead of Next.js <Link> → full reloads

## 🟠 STRINGS TO MOVE TO CMS
- Every page has hardcoded headings, descriptions, badges, CTAs
- contact/page.tsx: 3 inline FAQs, contact info, headings
- green-hub/page.tsx: 3 feature cards, headings
- impact/page.tsx: 4 stats, 4 categories, headings, CTA
- mission/page.tsx: 4 benefit cards, headings
- shop/page.tsx: 3 benefits, headings
- privacy/page.tsx: email, address
- Hero.tsx: fallback strings, CTA text
- FooterSection.tsx: all footer content
- MissionSection.tsx: content from constants

## 🟠 UNUSED CODE TO DELETE
- components/core/Navigation.tsx (replaced by FlyoutNav)
- components/core/SnapContainer.tsx (removing snap scroll)
- Root sanity.config.ts (duplicate, studio uses sanity/)
- FlyoutNav: unused imports FiMenu, FiX, FiChevronDown
- Hero: unused X, Menu imports
- ShopSection: unused X import
- MagneticButton, TiltCard: exported but never used
- ReactivePixelBackground: never imported by any page
- styled-components: dependency never used
- UIStore: isMobileMenuOpen, toggleMobileMenu, closeMobileMenu (no mobile menu)

## 🟠 MOBILE ISSUES
- h-screen snap sections = broken on iOS (URL bar)
- ReactivePixelBackground: mouse-only, no touch support
- TiltCard/MagneticButton: mouse-only
- GreenHubEmbed iframe: aspect-[9/16] on mobile = way too tall
- ImpactChart: YAxis fixed width, bars clip on narrow screens

## STATUS: IN PROGRESS
