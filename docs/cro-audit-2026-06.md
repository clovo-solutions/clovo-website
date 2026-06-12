# Clovo Website — Lead Generation & Clarity Audit (June 2026)

**Scope:** Homepage funnel (`src/app/page.tsx` + section components), navigation, lead capture.
**Goal:** Every change drives one action — booking the free discovery call.

> **Critical context:** A CRO pass was done in May 2026, but two of its key deliverables
> (`MidFunnelCTA.tsx`, `StickyMobileCTA.tsx`) and the section reorder were **never committed
> to git and are now lost**. The hero improvements partially survived but were rewritten by the
> later "improve SEO" commit (`d6d9f41`). This audit reflects the **current** state on `main`.

**Current section order:** Hero → SystemArchitecture ("The Engine" + "Our Reach") → Services → HowItWorks → Benefits → **Pricing** → Testimonials → Projects → Contact → SeoPages → Footer

---

### 1. Hero Section
**File:** `src/components/Hero.tsx`

**Current state:** H1 "Web Design & Development in Cyprus" with subhead "We build websites that rank on Google, load fast, and turn visitors into paying clients. For service businesses, clinics, and SMEs across Cyprus." CTAs: "Book a Free Strategy Call" (primary → `#contact`) and "See What We Do" (ghost → `#services`). Trust strip: "15+ businesses launched" + clickable "5.0 average rating".

**Problem:** This section mostly works — it passes the 5-second test and has trust signals. Three smaller leaks:
1. The badge "Cyprus Web Design Agency" repeats the H1 word-for-word — a wasted trust slot.
2. "Strategy Call" is light jargon; a restaurant owner books "a call", not "a strategy call".
3. The secondary CTA points to `#services` (more reading), not to proof. Real client sites are the strongest convincer.

**Recommended change:**
- Badge → `For clinics, restaurants & service businesses` (tells the visitor "this is for me" before the H1 even loads).
- Primary CTA → `Book a Free Call` with a small line underneath: `30 minutes · no obligation`.
- Secondary CTA → `See Our Work` → `#projects` (do this together with the section reorder in §12).
- Keep the H1 as-is — it's deliberately SEO-targeted and still instantly clear.

**Priority:** Medium  **Effort:** Small

---

### 2. "The Engine" / How It Works Diagram
**File:** `src/components/SystemArchitecture.tsx` (top half)

**Current state:** An animated node diagram (Strategy / SEO / Booking / Automation / CRM / Analytics → Clients) in the #2 slot, directly after the hero. Headline: "One System. Every Growth Lever." Subhead: "Strategy, execution, and automation feeding into one engine designed to bring you clients consistently."

**Problem:** Fails the 10-second test for the target visitor. "Growth lever", "engine", "CRM", "Automation", "Analytics" are agency vocabulary. It occupies the most valuable scroll position on the page (the first thing seen after the hero) yet describes Clovo's *methodology* instead of the visitor's *problem*. On mobile it degrades to a 2×2 icon grid + "Clients" box that communicates almost nothing. And the section has no CTA.

**Recommended change:** Keep the diagram (it's distinctive and well-built) but demote and translate it:
1. **Move it below HowItWorks** (see §12) — once the visitor knows the 3 steps, the diagram becomes "here's how it all connects" instead of a puzzle.
2. Rewrite the header:
   - Headline: `Everything You Need to Get Clients Online`
   - Subhead: `Your website, your Google ranking, your online bookings, and your reminders — built by one team and working together to bring you clients.`
3. Rename node labels to plain words: `Automation` → `Reminders`, `CRM` → `Client List`, `Analytics` → `Reports`. Keep SEO, Booking, Strategy, Clients.
4. On mobile, hide the icon grid and show three plain bullets instead:
   - `Your website brings in visitors from Google`
   - `Visitors book appointments by themselves`
   - `Reminders and follow-ups happen automatically`

**Priority:** High  **Effort:** Medium

---

### 3. "Our Reach" / About Section
**File:** `src/components/SystemArchitecture.tsx` (bottom half)

**Current state:** "Built for Businesses in Cyprus" with a good plain-language paragraph (Limassol, Nicosia, Paphos), then a stats row: `SEO — Google-first development`, `Speed — Core Web Vitals optimised`, `CY — Cyprus-based & trusted`, then a supporting line about "automation… one streamlined system".

**Problem:** The main paragraph is the best copy on the site. The stats row undoes it: "Core Web Vitals" and "Google-first development" are feature-speak nobody outside the industry recognises. The supporting line re-introduces "automation / streamlined system" jargon and is we-focused.

**Recommended change:** Rewrite the three stat labels from the client's perspective:
- `SEO` → `Your clients find you on Google`
- `Speed` → `Loads instantly — even on a phone`
- `CY` → `A local team you can actually meet`

Supporting line → `One team handles your website, your Google ranking, and your bookings — so you never have to chase three different suppliers.`

**Priority:** Medium  **Effort:** Small

---

### 4. Services / "What We Do" Section
**File:** `src/components/Services.tsx`

**Current state:** Six cards: High-Converting Websites, Booking System Integration, Calendar Sync, Client Acquisition, Analytics & Optimization, Save Time & Costs. No CTA at the end of the section.

**Problem:**
- "Client Acquisition" with "Automated lead generation pipelines that bring qualified prospects to your doorstep" is the single most jargon-dense card on the site — it answers no question a clinic owner has.
- Section subhead says "fully automated client acquisition engine" (flagged buzzword).
- Six cards end with… nothing. The visitor has just been told everything Clovo does and is given no way to act on it.

**Recommended change:**
1. Card rewrites (titles → descriptions):
   - `High-Converting Websites` → **`A Website That Wins You Clients`** — "A professional website built to make visitors call, book, or buy — not just look nice."
   - `Booking System Integration` → **`Online Booking`** — "Clients book their own appointments, day or night — no more phone tag."
   - `Calendar Sync` — keep title; description fine.
   - `Client Acquisition` → **`Get Found on Google`** — "When someone in Cyprus searches for what you do, you show up first — and that turns into enquiries."
   - `Analytics & Optimization` → **`See What's Working`** — "A simple report shows how many people visited, called, and booked. No spreadsheets needed."
   - `Save Time & Costs` — keep title; change "reduce operational overhead" → "cut down on admin".
2. Subhead → `From your first website to online bookings and automatic reminders — everything you need to win clients online.`
3. Add a CTA strip at the bottom of the section:
   > `Not sure what you need? That's normal — it's what the free call is for.` **[Book a Free Call →]**

**Priority:** High  **Effort:** Small–Medium

---

### 5. "The Process" Section (3 Steps)
**File:** `src/components/HowItWorks.tsx`

**Current state:** Three well-structured steps (Discovery Call → Build & Launch → Grow on Autopilot) with reassuring detail pills ("Free — no strings attached", "Delivered in 1–4 weeks", "Ongoing support included"). No CTA after Step 3.

**Problem:** Structure and risk-reduction are good. Two buzzwords from the banned list appear: Step 2 says "**digital ecosystem**", Step 3 is titled "Grow on **Autopilot**". And the section walks the visitor right up to the door (Step 1 = the call) without a handle to open it.

**Recommended change:**
- Step 2 description → `Our team designs and builds your website, your booking system, and your automatic reminders — all matched to your brand and ready to bring in clients.`
- Step 3 title → `Watch the Bookings Come In`; description → `Once everything is live, clients book on their own and new enquiries come in week after week. You focus on your work — the website does the rest.`
- Add a CTA directly under the steps:
  > `Step 1 is free and takes 30 minutes.` **[Book Your Discovery Call →]**

**Priority:** High  **Effort:** Small

---

### 6. Results / Stats Section
**File:** `src/components/Benefits.tsx`

**Current state:** Four stats: 3x More Bookings, 10+ Hours Saved Weekly, 40% Lower No-Show Rate, 2x Faster Growth. Already framed as client outcomes.

**Problem:** The numbers float with no anchor — nothing says where they come from, so a sceptical SME owner discounts them. "Systematic client acquisition outperforms random marketing" is jargon. Heading "Built for Measurable Impact" is abstract.

**Recommended change:**
- Heading → `What Our Clients Typically See`
- Subhead → `Real results from businesses we've worked with in Cyprus.` ⚠️ **Only ship this if the numbers are genuinely based on client data — otherwise soften the stats themselves rather than add a false anchor.**
- "2x Faster Growth" description → `A steady flow of enquiries beats waiting for referrals.`

**Priority:** Medium  **Effort:** Small

---

### 7. Pricing / Packages Section
**File:** `src/components/Pricing.tsx`

**Current state:** Three packages (Foundation €2,000+ / Growth €5,000+ / Scale custom), each with benefits, an "Outcome" box, and a "Book a Call" CTA. Section closes with a faint footnote about the free discovery call.

**Problem:**
1. **Pricing currently appears before Testimonials and Projects** — the visitor sees a €5,000 number before seeing a single piece of proof. This was fixed in May and regressed (the fix was never committed). This is the most likely drop-off point on the page.
2. No package answers "is this for me?" — descriptions are about the deliverable, not the buyer.
3. The outcome boxes use the banned vocabulary: "autopilot", "self-running growth machine", "digital growth engine".
4. The section's closing element is a 12px footnote — the weakest possible ending for the highest-anxiety section.

**Recommended change:**
1. Move Pricing **after** Testimonials and Projects (one-line change in `page.tsx` — see §12).
2. Add a "Best for:" line under each package name:
   - Foundation: `Best for: new businesses, or anyone whose current website looks dated and brings in nothing.`
   - Growth: `Best for: clinics, salons, and any business that books appointments.`
   - Scale: `Best for: established businesses ready to grow across Cyprus.`
3. Rewrite outcomes:
   - Growth: `Stop chasing clients — your website books them for you, even after hours.`
   - Scale: `Your website becomes your best salesperson, working around the clock.`
4. Replace the footnote with a real CTA block:
   > `Not sure which package fits? That's exactly what the free call is for — we'll tell you honestly, even if the answer is "the cheapest one."` **[Book a Free 30-Minute Call →]**

**Priority:** High  **Effort:** Small–Medium

---

### 8. Testimonials Section
**File:** `src/components/Testimonials.tsx`

**Current state:** Three genuine-sounding quotes with names and initials avatars. No business types, no photos. One name is in Cyrillic ("Анастасия Б") on an otherwise English page.

**Problem:** The quotes do mention outcomes (time saved, self-service signups) and per the May decision the quote text stays as-is. But without business types, a clinic owner can't see themselves in "Markos Christodoulou". The Cyrillic name reads as a copy-paste artifact and slightly dents credibility. The site already has a 5.0 Google rating link (in the hero) that this section doesn't exploit.

**Recommended change (no quote rewriting):**
- Add a factual role line under each name: `Small business owner`, `Clinic — Limassol`, `Service business — Limassol` (use the real business types).
- Transliterate "Анастасия Б" → `Anastasia B.`
- Add below the grid: `Read all our reviews on Google →` linking to the existing Google review URL.

**Priority:** Medium  **Effort:** Small

---

### 9. Portfolio / "Our Work" Section
**File:** `src/components/Projects.tsx`

**Current state:** A polished carousel of 5 real local projects (dental clinic, architect, café, restaurant, car dealer) with locations and tags, linking out to live sites, ending in a strong "Start Your Project" CTA.

**Problem:**
1. Each project has a `stats: { label: "", value: "" }` field that is defined but **empty** — the component was designed to show a result per project and never got the data. Cards currently prove "we build pretty sites", not "we get results".
2. Three of five links go to `*.vercel.app` subdomains. To anyone who checks, that reads "demo, not delivered" — and every click navigates the visitor away mid-funnel.
3. Title typo: `"Davtain Dental Clinic."` (trailing period; the linked site says "Mariam Davtian" — likely "Davtian").
4. Audience coverage is actually great (clinic, restaurant, café, dealer) — visitors *can* see themselves. Worth keeping front-and-centre, which means moving the section up (§12).

**Recommended change:**
- Populate one true, concrete fact per card via the existing `stats` field: e.g. `Live in 2 weeks`, `Online booking included`, `#1 on Google for "architect Larnaca"` — **only claims that are verifiably true**.
- Replace vercel.app links with custom domains where they exist (liva-studio.com already does); for the rest, either get the production URL or remove the outbound link and let the card open a larger screenshot.
- Fix the "Davtain"/trailing-period typo.

**Priority:** Medium  **Effort:** Small

---

### 10. Contact / Lead Capture Form
**Files:** `src/components/Contact.tsx`, `src/components/ContactForm.tsx`, `src/locales/en.json`

**Current state:** Heading "Ready to Put Your Growth on Autopilot?" beside a form with Name*, Email*, Phone (optional), Message*, a marketing opt-in checkbox, a **required** GDPR consent checkbox, and a ~100-word privacy paragraph. Submit button: "Send Message". Good benefit bullets ("Free strategy session — no commitment").

**Problem:** This is the moment of decision and it has the most friction on the page:
1. "Autopilot" — the flagship banned buzzword — is the last headline the visitor reads before deciding.
2. Message is **required**; many ready-to-book visitors have nothing to type and a required empty box is a classic abandon point. Effectively 4 required interactions (name, email, message, consent).
3. The GDPR paragraph is a wall of legal text *above* the consent boxes.
4. "Send Message" undersells the offer — they're not sending a message, they're claiming a free call.
5. **No alternative channel.** No WhatsApp, no phone, no email link — in Cyprus, WhatsApp is often the *preferred* first touch for exactly this demographic.
6. Benefit bullet "See projected ROI before you invest" is finance-speak.

**Recommended change:**
- Heading → `Let's Get You More Clients` / accent line → `Book Your Free Call`
- Description → keep (it's good).
- Benefit 3 → `Know the cost and what you'll get — before you spend a cent`
- Make Message optional: label → `Anything you'd like to tell us? (optional)`
- Compress the privacy paragraph to one sentence: `We'll only use your details to reply to you. Full details in our Privacy Policy.` Keep the required consent checkbox (legal), keep the marketing opt-in.
- Submit → `Book My Free Call`
- Under the form add: `Prefer to talk? ` **WhatsApp us →** ` or email hello@clovo-solutions.com` (wire `trackCTA` on the WhatsApp link).

**Priority:** High  **Effort:** Small–Medium

---

### 11. Navigation & Sticky CTAs
**File:** `src/components/Navbar.tsx`

**Current state:** Desktop nav has a persistent "Book a Call" button ✓. The navbar **hides on scroll-down** (reappears on scroll-up). On mobile, the only CTA lives *inside the hamburger drawer*. The May `StickyMobileCTA` bottom bar no longer exists. Lines 443–846 are ~400 lines of commented-out dead navbar code.

**Problem:** With 60%+ mobile traffic, the mobile funnel currently has **zero persistent CTA**: the navbar (with the hamburger) hides itself while scrolling down — exactly when interest is building — and even when visible, booking requires hamburger → drawer → button. Combined with the in-page CTA desert (nothing between Hero and Pricing), a mobile visitor can read 6 sections with no way to act.

**Recommended change:**
1. **Rebuild `StickyMobileCTA.tsx`** (it was never committed): a slim fixed bottom bar, mobile-only, appearing after the hero scrolls out, with a single full-width `Book a Free Call` button → `#contact`. Hide it while the contact section is in view. This is the highest-leverage mobile fix available.
2. Rebuild the `MidFunnelCTA` band (compact one-liner + button) and place it between Services and HowItWorks.
3. Delete the 400 lines of commented-out code in `Navbar.tsx` (hygiene; this also regressed from May).

**Priority:** High  **Effort:** Medium (components must be rebuilt — they're not in git history)

---

### 12. Overall Funnel Flow

**Current journey & leak points:**

| Stage | Section | Leak |
|---|---|---|
| 1 | Hero | minor (secondary CTA → reading, not proof) |
| 2 | The Engine | **confusion at the #2 slot; no CTA** |
| 3–5 | Services / Process / Benefits | **CTA desert — 4 consecutive sections with no action** |
| 6 | Pricing | **€5,000 shown before any proof** |
| 7–8 | Testimonials / Projects | proof arrives *after* the price shock; Projects leaks visitors to external vercel.app tabs |
| 9 | Contact | **required message + consent wall + no WhatsApp** |
| mobile | everywhere | **no persistent CTA at all** |

**Recommended section order** (one edit in `src/app/page.tsx`):

```
Hero → Services → HowItWorks → SystemArchitecture (reframed) → Benefits
     → Testimonials → Projects → Pricing → Contact → SeoPages
```

Logic: what you get → how it works → how it connects → results → proof (words) → proof (work) → price → action. Price is now the *second-to-last* thing seen, after trust is established.

Also: remove the dead `ClovoCarousel` import in `page.tsx` (component is commented out; `ClovoCarousel.jsx` can be deleted if it stays unused).

---

## Summary: Top 5 Highest-Impact Changes

1. **Reorder sections so Testimonials + Projects come before Pricing** (`page.tsx`). One-line change, removes the single biggest drop-off (price before proof). *Impact: very high · Effort: trivial.*
2. **Rebuild the sticky mobile CTA bar.** 60%+ of traffic currently has no persistent way to book. *Impact: very high · Effort: medium.*
3. **Add CTAs to the CTA desert** — section-end CTAs after Services, Process, and Pricing (real block, not a footnote), plus the MidFunnel band. The visitor should never be more than one screen from a booking button. *Impact: high · Effort: small.*
4. **Cut contact-form friction** — "Book My Free Call" button, optional message field, compressed GDPR text, WhatsApp alternative. *Impact: high · Effort: small–medium.*
5. **De-jargon sweep** — kill "autopilot" (Contact heading, Process Step 3, Pricing outcome), "digital ecosystem" (Step 2), "growth engine/lever" (Engine, Pricing, Services subhead), "Client Acquisition" card, "Core Web Vitals" label. *Impact: high · Effort: small.*

**Process note:** commit after implementing. The May improvements were lost precisely because they never made it into git.

---

## Funnel Map (After Changes)

```
                         ┌──────────────────────────────────────────┐
 MOBILE: sticky bottom   │  NAV: "Book a Call" (persistent, desktop)│
 bar "Book a Free Call"  └──────────────────────────────────────────┘
 visible from section 2 ↓
┌─────────────────────────────────────────────────────────────────────┐
│ HERO  "Web Design & Development in Cyprus"                          │
│  ├── trust: 15+ businesses · 5.0 Google rating                      │
│  ├── [Book a Free Call]──────────────────────────────┐              │
│  └── [See Our Work] ──→ PROJECTS                     │              │
│                                                      │              │
│ SERVICES  "what you get", plain names                │              │
│  └── [Book a Free Call] ─────────────────────────────┤              │
│                                                      │              │
│ HOW IT WORKS  3 steps, risk removed                  │              │
│  └── "Step 1 is free" [Book Your Discovery Call] ────┤              │
│                                                      │              │
│ THE ENGINE (reframed: "how it all connects")         │              │
│ BENEFITS  "what clients typically see"               │              │
│                                                      │              │
│ TESTIMONIALS  names + business types + Google link   │              │
│ PROJECTS  real Cyprus businesses + 1 result each     │              │
│  └── [Start Your Project] ───────────────────────────┤              │
│                                                      │              │
│ PRICING  "Best for:" on each package                 │              │
│  ├── [Book a Call] ×3                                │              │
│  └── "Not sure which fits?" [Book a Free Call] ──────┤              │
│                                                      ▼              │
│ CONTACT  "Let's Get You More Clients"                               │
│  ├── 3 required fields + optional message → [Book My Free Call]     │
│  └── alt: WhatsApp · email                                          │
└─────────────────────────────────────────────────────────────────────┘
                              ▼
                   ✅ FREE DISCOVERY CALL BOOKED
```
