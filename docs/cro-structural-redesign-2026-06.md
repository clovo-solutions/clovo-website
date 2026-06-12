# Clovo Website — Structural CRO Audit & Redesign (June 2026)

**Auditor stance:** One goal — booked discovery calls. Every section either earns its scroll or goes.
**Audience benchmark for all copy:** a 55-year-old dentist in Paphos who has never hired a web agency.

**Current page order:** Hero → The Engine + Our Reach → What We Do (6 cards) → The Process → Results/Stats → Pricing → Testimonials → Our Work → Contact → SEO links → Footer

---

# PHASE 1 — SECTION-BY-SECTION AUDIT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Hero
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: REWRITE** (copy only — structure is right)

**CURRENT PROBLEM:**
The hero is the healthiest section on the page, but it leaks in three places. The badge ("Cyprus Web Design Agency") repeats the H1 word-for-word — a wasted slot above the most-read line on the page. The primary CTA says "Book a Free **Strategy** Call" — a dentist doesn't book "strategy calls", consultants do. And the secondary CTA ("See What We Do" → Services) sends the curious visitor to *more reading* instead of to proof.

**CRO REASONING:**
Above the fold must answer four questions: what do you do, who is it for, can I trust you, what do I do next. The H1 + subhead answer 1 and 2. The trust strip (15+ businesses, 5.0 rating) answers 3. Question 4 is answered with friction-adding vocabulary. Also: the strongest secondary action for a skeptical cold visitor is *evidence*, not *explanation* — "show me" converts better than "tell me more."

**RECOMMENDATION:**
- Badge → `For clinics, restaurants & service businesses in Cyprus` — the visitor self-qualifies before reading the headline.
- H1: **keep** "Web Design & Development in Cyprus" (deliberate SEO target; instantly clear).
- Subhead: **keep** — it's already plain and outcome-led.
- Primary CTA → `Book a Free Call` with microcopy underneath: `30 minutes · no obligation · honest advice`
- Secondary CTA → `See Our Work` → `#projects` (works once Projects moves up — Phase 3).
- Trust strip: keep both signals; the 5.0 rating link to Google is doing real work.

**PRIORITY:** 🟡 High  **EFFORT:** Small

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: The Engine (animated system diagram)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: REMOVE** (from the homepage funnel)

**CURRENT PROBLEM:**
This is the second thing every visitor sees, and it is built for the wrong audience. The headline is "One System. Every Growth Lever." The nodes say Strategy, SEO, Booking, Automation, CRM, Analytics. A dentist in Paphos knows what two of those six words mean. The section answers a question nobody asked ("how is Clovo's methodology architected?") at the exact moment the visitor is asking "can these people get me more patients?" It has no CTA. On mobile — the majority experience — it collapses into a 2×2 icon grid that communicates nothing at all.

**CRO REASONING:**
The slot directly after the hero is the highest-attention real estate on the page after the fold. Every second of confusion there compounds: cognitive load spent decoding "growth lever" is trust not being built. AIDA says this slot belongs to *Interest* — and for a local SME owner, interest is created by seeing businesses like theirs, not an org chart of services. A beautiful section that doesn't move the visitor toward the call is decoration, and decoration in slot #2 is expensive.

**RECOMMENDATION:**
Remove it from the homepage. Don't delete the component — it's well-built and can live on the `/services` page where a more-engaged visitor might appreciate it. The "Our Reach" content currently embedded at the bottom of this component must be **extracted and kept** (next verdict). Slot #2 goes to "What We Do" (rebuilt — see below).

If removing it entirely feels too aggressive for the team: the fallback is moving it below The Process and rewriting the header to `Everything You Need to Get Clients Online` / `Your website, your Google ranking, your bookings, and your reminders — one team, all connected.` But the honest recommendation is removal. The page gets shorter, faster, and clearer.

**PRIORITY:** 🔴 Critical  **EFFORT:** Medium (extract Our Reach, remove from page.tsx)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Our Reach
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: RESTRUCTURE** (extract from the Engine component; move next to Testimonials)

**CURRENT PROBLEM:**
The main paragraph here is the best copy on the entire site ("…helping businesses in Limassol, Nicosia, Paphos… build websites that actually generate clients"). It's buried at the bottom of the most confusing section, where the visitors who most need it have already scrolled past in a fog. The stat row beneath it then undoes the plain language with "Google-first development" and "Core Web Vitals optimised."

**CRO REASONING:**
Local specificity is Clovo's sharpest trust weapon — a Cyprus business owner trusts "we work with businesses in Limassol and Paphos" far more than any global-sounding claim. Local trust markers belong in the *trust cluster* of the page (next to testimonials and portfolio), not appended to a methodology diagram. This also keeps the server-rendered SEO text intact — it just moves.

**RECOMMENDATION:**
Extract into a standalone, compact `LocalTrust` section placed directly before Testimonials. Keep the paragraph verbatim. Rewrite the three stat labels from the client's seat:
- `SEO` → `Your clients find you on Google`
- `Speed` → `Loads instantly — even on a phone`
- `CY` → `A local team you can actually meet`

Supporting line → `One team handles your website, your Google ranking, and your bookings — so you never have to chase three different suppliers.`

**PRIORITY:** 🟡 High  **EFFORT:** Medium

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: What We Do (Services — 6 cards)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: RESTRUCTURE** (6 cards → 3, then a CTA)

**CURRENT PROBLEM:**
Six cards is a menu, and menus make people browse, not act. Worse, the six aren't even six services — "Calendar Sync" and "Analytics & Optimization" are *features* of the other offerings, and "Save Time & Costs" is a *benefit*, not a service. The visitor can't tell what they'd actually be buying. The card "Client Acquisition — automated lead generation pipelines that bring qualified prospects to your doorstep" is the worst sentence on the website. And after all six cards: no CTA. The section ends in air.

**CRO REASONING:**
Hick's Law: more options, slower decisions. A non-technical owner doesn't arrive shopping for "calendar sync" — they arrive with one of three problems: *my website is bad/nonexistent*, *nobody finds me on Google*, *bookings are chaos*. Map the section to those three problems and the visitor instantly locates themselves. Every section that builds desire must end with a release valve (a CTA), or the desire dissipates into the next scroll.

**RECOMMENDATION:**
Collapse to three problem-shaped cards; fold the rest in as bullets.

**Section header:**
- Eyebrow: `What We Do`
- H2: `Three Things. Done Properly.`
- Sub: `From your first website to online bookings and automatic reminders — everything you need to win clients online.`

**Card 1 — `A Website That Wins You Clients`**
"A professional website built to make visitors call, book, or buy — not just look nice. Fast, mobile-first, and yours to keep."
Bullets: `Custom design` · `Works perfectly on phones` · `Ready in 1–2 weeks`

**Card 2 — `Get Found on Google`**
"When someone in Cyprus searches for what you do, you show up — and that turns into enquiries."
Bullets: `Local SEO` · `Google Maps & reviews` · `Simple monthly report — see how many people visited, called, and booked`

**Card 3 — `Online Booking That Runs Itself`**
"Clients book their own appointments, day or night. Automatic confirmations and reminders mean fewer no-shows and no more phone tag."
Bullets: `24/7 self-booking` · `Syncs with your calendar` · `Automatic reminders`

**Section-end CTA strip:**
> `Not sure which one you need? That's normal — most of our clients weren't either.`
> **[Book a Free Call — We'll Tell You Honestly →]**

**PRIORITY:** 🔴 Critical  **EFFORT:** Medium

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: The Process (3 steps)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: KEEP** (rewrite two lines, add the missing CTA)

**CURRENT PROBLEM:**
Structurally this is exactly what a fearful first-time buyer needs — three steps, reassuring detail pills ("Free — no strings attached", "Delivered in 1–4 weeks"). Two flaws: Step 2 says "**digital ecosystem**" and Step 3 is titled "Grow on **Autopilot**" — both on the banned-jargon list. And the section describes Step 1 (the call) in glowing terms, then doesn't offer a button to take it. That's showing someone the door and not putting a handle on it.

**CRO REASONING:**
Process sections reduce perceived effort and risk — the two biggest blockers for non-technical buyers. The moment of maximum persuasion is the *end* of the section, when the visitor has just internalized "this is easy and the first step is free." A CTA there harvests intent at its peak.

**RECOMMENDATION:**
- Step 2 description → `We design and build your website, your booking system, and your automatic reminders — all matched to your brand and ready to bring in clients.`
- Step 3 title → `Watch the Bookings Come In`; description → `Once everything is live, clients book on their own and new enquiries come in week after week. You focus on your work — the website does the rest.`
- Add directly under the three cards:
  > `Step 1 is free and takes 30 minutes.`
  > **[Book Your Discovery Call →]**

**PRIORITY:** 🟡 High  **EFFORT:** Small

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Results / Stats ("Built for Measurable Impact")
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: REMOVE**

**CURRENT PROBLEM:**
Four big multipliers — "3x More Bookings", "2x Faster Growth", "40% Lower No-Show Rate" — with no source, no client name, no timeframe. The hero says "15+ businesses launched." A skeptical SME owner does the math: a 15-client agency claiming universal 3x results reads as marketing-template numbers, not evidence. One description even says "Systematic client acquisition outperforms random marketing" — pure agency-speak.

**CRO REASONING:**
Unverifiable claims don't just fail to add trust — they *subtract* it, and they cheapen the genuine proof nearby (real testimonials, real local sites). Specificity converts; round multipliers don't. "Maria's clinic went from 0 online bookings to 30 a month" beats "3x more bookings" every time. If the specific numbers don't exist yet, the section has nothing true to say, and a section with nothing true to say should not exist.

**RECOMMENDATION:**
Remove the section. Redistribute real proof where it lands hardest:
- Put one **true** result per project card in the Portfolio (the `stats` field already exists in the code and is empty).
- If genuine client metrics exist, add a role line + result to the testimonials instead.
- The "40% fewer no-shows from automatic reminders" claim, if industry-sourced, can survive as a single line inside the "Online Booking" service card — attributed ("clinics using automated reminders typically see…").

**PRIORITY:** 🟡 High  **EFFORT:** Small (deletion) — Medium if redistributing real numbers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Packages / Pricing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: RESTRUCTURE** (move late, add buyer-matching, fix the ending)

**CURRENT PROBLEM:**
Pricing currently appears **before** testimonials and portfolio — the visitor meets "Starting from €5,000" before seeing a single piece of evidence. That ordering is the single biggest leak on the page. Within the section: no package says *who it's for*; the outcome boxes say "autopilot" and "self-running growth machine"; and the section's closing element is a 12px footnote — the weakest possible ending to the highest-anxiety moment on the page.

**CRO REASONING:**
Price is pain; proof is anesthetic. Anesthetic goes first. Keeping prices *visible* is correct — transparency pre-qualifies leads and builds trust with this audience (hiding prices reads as "expensive") — but they must come after the visitor has seen real local sites and heard from real clients. And every package must answer "is this me?" in one line, or the visitor defaults to the cheapest or to leaving.

**RECOMMENDATION:**
1. Move the section to position 8 of 11 (Phase 3) — after Testimonials and Our Work.
2. Add a `Best for:` line under each package name:
   - **Foundation** — `Best for: new businesses, or anyone whose current website looks dated and brings in nothing.`
   - **Growth** — `Best for: clinics, salons, and any business that books appointments.`
   - **Scale** — `Best for: established businesses ready to grow across Cyprus.`
3. Rewrite outcome boxes:
   - Growth → `Stop chasing clients — your website books them for you, even after hours.`
   - Scale → `Your website becomes your best salesperson, working around the clock.`
4. Replace the footnote with a real closing block:
   > `Not sure which package fits? That's exactly what the free call is for — we'll tell you honestly, even if the answer is "the cheapest one."`
   > **[Book a Free 30-Minute Call →]**

**PRIORITY:** 🔴 Critical  **EFFORT:** Small (reorder is one line; copy is small)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Testimonials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: REWRITE** (framing, not the quotes — quotes are locked per earlier decision)

**CURRENT PROBLEM:**
The quotes themselves are believable and mention real outcomes (time saved, clients self-booking). But there are no business types — a dentist can't see themselves in "Markos Christodoulou" with no context. One name is in Cyrillic ("Анастасия Б") on an English page, which reads like a copy-paste artifact. And the section ignores its best asset: Clovo has a clickable 5.0 Google rating (used in the hero) that would let skeptics verify these are real people.

**CRO REASONING:**
Social proof works through *similarity* — "someone like me succeeded." Business type + location is what creates similarity for this audience. Verifiability (a Google reviews link) converts a claim into evidence.

**RECOMMENDATION:**
- Add a factual role line under each name: `Small business owner`, `Clinic — Limassol`, `Service business — Limassol` (use real types).
- Transliterate → `Anastasia B.`
- Under the grid: `★ 5.0 on Google — read all our reviews →` (same URL as the hero).
- Move the section before Pricing (Phase 3).

**PRIORITY:** 🟡 High  **EFFORT:** Small

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Our Work / Portfolio
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: KEEP** (move up; three small fixes)

**CURRENT PROBLEM:**
This is the strongest trust section on the site — five real local businesses (dental clinic, architect, café, restaurant, car dealer) that let almost any Cyprus SME owner see themselves — and it's sitting in position 8, after the price shock. Three fixes needed: (1) each card has an empty `stats` field built for a result that was never filled, so cards prove "we build pretty sites," not "we get results"; (2) three of five links go to `*.vercel.app` subdomains — to anyone who looks, that reads "demo, not delivered," and every click sends the visitor away mid-funnel; (3) "Davtain Dental Clinic." has a trailing period and the linked site spells it "Davtian."

**CRO REASONING:**
For an agency, the portfolio *is* the product demo. Demos belong in the desire-building upper-middle of the page, not the basement. Outbound links mid-funnel are leaks — acceptable only when they strengthen credibility more than they cost in exits, which vercel.app subdomains don't.

**RECOMMENDATION:**
- Move to position 5 (right after Services) — it's also the target of the hero's "See Our Work" CTA.
- Fill the existing `stats` field with one true fact per card: `Live in 2 weeks`, `Online booking included`, `Found on Google Maps`, etc. **No invented numbers.**
- Use production domains where they exist (liva-studio.com does); for the rest, get the real URL or drop the outbound link and enlarge the screenshot on tap.
- Fix the Davtian typo. Keep the closing `Start Your Project` CTA — it's good.

**PRIORITY:** 🟡 High  **EFFORT:** Small

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: REWRITE** (highest-leverage friction fixes on the page)

**CURRENT PROBLEM:**
The decisive moment, and it has the most friction on the page. The headline the visitor reads while deciding is "Ready to Put Your Growth on **Autopilot**?" — the flagship banned buzzword. The Message field is *required*, so a ready-to-book visitor staring at an empty mandatory box abandons. A ~100-word GDPR paragraph sits above the consent checkboxes. The button says "Send Message" — they're not sending a message, they're claiming a free call. And there is **no alternative channel anywhere**: no WhatsApp, no phone, no email — in Cyprus, WhatsApp is often the preferred first touch for exactly this demographic.

**CRO REASONING:**
Every required field costs conversions; every paragraph between the visitor and the button costs more. Button copy should describe the *value received*, not the *mechanical action*. Channel preference is friction too: forcing form-people and chat-people through the same gate loses the chat-people entirely.

**RECOMMENDATION:**
- Heading → `Let's Get You More Clients` / accent line → `Book Your Free Call`
- Keep the description and the three benefit bullets, but bullet 3: `See projected ROI before you invest` → `Know the cost and what you'll get — before you spend a cent`
- Message field → optional; label: `Anything you'd like to tell us? (optional)`
- Compress the GDPR paragraph to: `We'll only use your details to reply to you. Full details in our Privacy Policy.` Keep the required consent checkbox (legal) and the marketing opt-in.
- Submit button → `Book My Free Call`
- Under the form: `Prefer to talk? ` **WhatsApp us →** ` · or email hello@clovo-solutions.com` (track clicks with the existing `trackCTA`).

**PRIORITY:** 🔴 Critical  **EFFORT:** Medium

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Navigation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: RESTRUCTURE** (mobile CTA is broken as a funnel)

**CURRENT PROBLEM:**
Desktop is fine — persistent "Book a Call" button. Mobile is a funnel failure: the navbar **hides itself on scroll-down** (exactly when interest is building), and even when visible, booking requires hamburger → drawer → button. There is no sticky mobile CTA bar — the one built in May was never committed and is gone. With 60%+ mobile traffic, the majority of visitors have *zero persistent way to act*. Bonus: lines 443–846 of `Navbar.tsx` are ~400 lines of commented-out dead code.

**CRO REASONING:**
"The visitor should never be more than one tap from booking" is the whole game on mobile. A hidden nav with a buried CTA means the only booking moments are the in-page CTAs — and currently there's a four-section desert without any.

**RECOMMENDATION:**
- **Rebuild `StickyMobileCTA`:** slim fixed bottom bar, mobile only, appears after the hero scrolls out, single full-width `Book a Free Call` button → `#contact`; hide while the contact section is on screen.
- Keep nav-hide-on-scroll if desired — the sticky bar compensates.
- Nav links: reorder so `Our Work` comes second (`Services · Our Work · How It Works · Pricing · Testimonials`) — proof should be one tap away.
- Delete the dead commented code.

**PRIORITY:** 🔴 Critical  **EFFORT:** Medium (component rebuild)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: SEO Links ("Explore Our Services")
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: KEEP** (it's for Google, not for the visitor — keep it quiet)

**CURRENT PROBLEM:**
Six internal links sitting between the contact form and the footer. From a pure-conversion lens it's an exit ramp right after the form; from an SEO lens it's load-bearing internal linking for the landing pages. Currently styled prominently enough to compete for attention.

**CRO REASONING:**
A converted visitor never sees it; a non-converted visitor leaving anyway might land on a more specific page (e.g., the clinics page) that converts them there. Net positive *as long as it stays visually quiet and below the form*.

**RECOMMENDATION:**
Keep exactly where it is (after Contact). Change the eyebrow from `Explore Our Services` → `More From Clovo` and reduce visual weight slightly. No other work — don't spend effort here.

**PRIORITY:** 🟢 Medium  **EFFORT:** Small

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION: Footer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**VERDICT: REWRITE** (small but real trust gaps)

**CURRENT PROBLEM:**
The "About" link points to `#` — a dead link in the trust zone of the page. More importantly: **no email, no phone, no address**. For a local-trust business, a footer with no way to contact a human and no physical anchor quietly says "we might not really be here." It also hurts local SEO (NAP consistency).

**CRO REASONING:**
Footers are where skeptics go to verify a business is real. Contact details there are a trust signal even for people who never use them.

**RECOMMENDATION:**
- Remove the dead About link (or point it at the Our Reach/local section).
- Add a contact column: email, phone/WhatsApp number, `Limassol, Cyprus`.
- Add the Google rating line: `★ 5.0 on Google` linking to the reviews.

**PRIORITY:** 🟢 Medium  **EFFORT:** Small

---

# PHASE 2 — SECTIONS TO ADD

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW SECTION: FAQ — "Questions Everyone Asks"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**WHERE TO INSERT IT:** After Pricing, before Contact.

**WHY IT'S MISSING:**
Every unanswered objection is a silent exit. The page currently handles zero objections explicitly. The visitor who has scrolled to Pricing has 3–4 specific worries, and right now their only options are "book a call anyway" (high bar) or leave (easy). The FAQ also absorbs the "Why not just use Wix?" skeptic without needing a combative standalone comparison section.

**WHAT IT SHOULD CONTAIN:** Accordion, five questions, plain answers, CTA at the end.

**Q1 — "How much does a website actually cost?"**
"Most of our projects start at €2,000 for a complete website, and €5,000 if you want online bookings and automation included. You'll know the exact price after the free call — before you commit to anything. No hidden fees, no surprise invoices."

**Q2 — "Couldn't I just use Wix or have my nephew build it?"**
"You could — and for some businesses that's genuinely enough. The difference is what happens after launch: showing up on Google, loading fast on phones, and turning visitors into bookings. That's the part DIY sites usually miss. If we think a simple DIY site is all you need, we'll tell you that on the call."

**Q3 — "I'm not technical. Will I be able to manage it?"**
"Yes — that's the point. Bookings, reminders, and updates run on their own. If you can use WhatsApp, you can use what we build. And we stay available after launch; you're never left alone with it."

**Q4 — "I already have a website. Do I need a new one?"**
"Maybe not. Sometimes a few fixes are enough. Send us your current site and we'll tell you honestly on the call whether it needs replacing or just improving."

**Q5 — "How long does it take?"**
"A complete website: 1–2 weeks. With bookings and automation: up to 4 weeks. You'll see the design before anything goes live."

**Closing strip:** `Have a different question? Ask us — no obligation.` **[Book a Free Call]** · `or WhatsApp us →`

**EXPECTED IMPACT:** Directly converts the hesitant middle — visitors who are interested but have one blocking doubt. FAQ sections consistently lift conversions on high-consideration purchases because they replace "I'll think about it" with an answer. Also captures long-tail SEO ("website cost Cyprus" questions).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW SECTION: "What Happens After You Book" (micro-section)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**WHERE TO INSERT IT:** Directly above the contact form (inside the Contact section's left column, replacing nothing — it extends the existing benefits list area).

**WHY IT'S MISSING:**
The #1 unspoken fear before booking a call with an agency: "I'll get a pushy sales pitch and be trapped." Nothing on the page currently de-fangs the call itself. The benefit bullets gesture at it ("no commitment") but don't *show* the experience.

**WHAT IT SHOULD CONTAIN:** Three tiny numbered steps with icons:

1. **`We talk for 30 minutes`** — "You tell us about your business. We ask questions. No tech talk."
2. **`You get a plan within 48 hours`** — "What we'd build, what it costs, and what it gets you — in writing."
3. **`You decide. No pressure.`** — "Take it, shop it around, or do nothing. The plan is yours either way."

**EXPECTED IMPACT:** This is risk-reversal in concrete form. It converts the visitors who reached the form and hesitated — the cheapest conversions on the page, because they're already 95% there. "The plan is yours either way" is a genuine giveaway that flips the dynamic from "sales call" to "free value."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW SECTION: "Who We Work With" strip
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**WHERE TO INSERT IT:** Immediately after the Hero — a slim, one-screen-line band, not a full section.

**WHY IT'S MISSING:**
The target visitor is "not sure what they need, just knows they want more clients." The fastest way to keep them scrolling is instant self-recognition. The hero subhead names "service businesses, clinics, and SMEs" in passing; a visual strip makes it land.

**WHAT IT SHOULD CONTAIN:**
One line + five inline items with small icons:
`Built for businesses like yours:` `🦷 Clinics & doctors` · `🍽 Restaurants & cafés` · `💇 Salons & studios` · `🔧 Trades & services` · `🏢 Local companies`
(Each item can anchor-link to the matching portfolio card or SEO page later — optional.)

**EXPECTED IMPACT:** Costs ~60px of vertical space; buys self-qualification. Visitors who see their category scroll on with "this is for me" loaded — which raises engagement of every section that follows. Doubles as a soft segue to the portfolio, which features exactly these business types.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW SECTION: Risk-Reversal line (element, not section)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**WHERE TO INSERT IT:** Directly under the primary CTA in the Hero and under the submit button in Contact.

**WHY IT'S MISSING:** The free call's risk-free nature is stated once, in a benefits list. It should be physically attached to every high-stakes button.

**WHAT IT SHOULD CONTAIN:** One line, two placements:
- Hero (under primary CTA): `30 minutes · no obligation · honest advice`
- Contact (under submit): `No contract. No pressure. If we're not the right fit, we'll say so.`

**EXPECTED IMPACT:** Micro-copy at the point of action is the highest-ROI text on any page — it answers the last-millisecond doubt ("what am I committing to?") exactly when it fires.

**A note on urgency/scarcity:** Only if true. If Clovo genuinely caps intake, one honest line in the Pricing closing block — `We take on a limited number of projects each month so every site gets full attention.` — is acceptable. Do **not** add countdown timers, fake "2 spots left," or seasonal discounts; this audience smells it, and the hard rules forbid it.

---

# PHASE 3 — RESTRUCTURED PAGE ORDER

```
NEW PAGE STRUCTURE
──────────────────
 1. Navbar                    — persistent "Book a Call" (desktop) + rebuilt sticky bottom bar (mobile)
 2. Hero                      — instant clarity: what, for whom, trust strip, 2 CTAs
 3. Who We Work With (strip)  — 60px of self-qualification; "this is for me"
 4. What We Do (3 cards)      — maps their problem to an offer; ends in a CTA
 5. Our Work (portfolio)      — proof immediately after the promise; hero's "See Our Work" lands here
 6. The Process (3 steps)     — reduces fear/effort now that desire exists; ends in a CTA
 7. Local Trust + Testimonials — verifiable social proof cluster (Our Reach copy + quotes + Google link)
 8. Pricing                   — price lands after proof; "Best for:" lines; closing CTA block
 9. FAQ                       — catches every objection Pricing just triggered; CTA + WhatsApp
10. Contact                   — "What Happens After You Book" + 3-field form + WhatsApp alternative
11. SEO Links (quiet)         — for Google and leavers only; below the form
12. Footer                    — real contact details, Google rating, no dead links
```

**Removed from the page:** The Engine diagram (→ `/services` page if kept at all), the Results/Stats section (replaced by real per-project facts).
**Net effect:** Two noise sections out, three light trust sections in. The page gets *shorter in reading time* while answering more questions.

---

# PHASE 4 — CTA STRATEGY

**The single primary CTA:** the Hero's `Book a Free Call` — visually dominant (solid accent, glow) — and its mobile twin, the **sticky bottom bar**, which is the de facto primary for 60%+ of traffic.

| # | Placement | Label | Notes |
|---|---|---|---|
| 1 | Navbar, right side (desktop) | `Book a Call` | Persistent; existing — keep |
| 2 | **Sticky mobile bottom bar** | `Book a Free Call` | **REBUILD — currently missing.** Appears after hero, hides over Contact |
| 3 | Hero, primary | `Book a Free Call` + `30 minutes · no obligation · honest advice` | THE primary CTA |
| 4 | Hero, secondary (ghost) | `See Our Work ↓` → `#projects` | Proof path for skeptics |
| 5 | End of What We Do | `Book a Free Call — We'll Tell You Honestly` | **MISSING today.** Catches "I don't know what I need" visitors |
| 6 | End of Our Work | `Start Your Project` | Exists — keep |
| 7 | End of The Process | `Book Your Discovery Call` + `Step 1 is free and takes 30 minutes.` | **MISSING today.** Peak-intent moment |
| 8 | Each Pricing card | `Book a Call` | Exists — keep |
| 9 | End of Pricing | `Book a Free 30-Minute Call` + "we'll tell you honestly…" | **Currently a 12px footnote — upgrade to real block** |
| 10 | End of FAQ | `Book a Free Call` + `or WhatsApp us →` | New section |
| 11 | Contact submit | `Book My Free Call` + risk-reversal line | Currently `Send Message` — rename |
| 12 | Contact, below form | `WhatsApp us →` · `hello@clovo-solutions.com` | **MISSING today.** Channel alternative |
| 13 | Footer | `Book a Call` link | Exists — keep |

**Coverage check:** sections 4→5→6 each end in a CTA; 7 (testimonials) flows directly into 8 which has four; 9 and 10 close. No visitor is ever more than one section from a button — and on mobile, never more than one *tap* (sticky bar).

**Label logic:** every label is a variation of the same promise (free call), phrased for the context the visitor is in — honesty after Services ("we'll tell you honestly"), low effort after Process ("30 minutes"), commitment after Contact ("Book *My* Free Call" — possessive converts better at the final step). Never "Submit," never "Send."

---

# PHASE 5 — FINAL DELIVERABLES

## 5a. Top 7 Highest-Impact Changes

1. **Move Pricing after Testimonials + Our Work** (`page.tsx` reorder). Removes the price-before-proof leak at the most expensive point in the funnel. *Expected impact: highest of any single change — this is where €5,000 currently meets zero evidence.*
2. **Rebuild the sticky mobile CTA bar.** 60%+ of traffic currently has no persistent way to book; the navbar hides itself on scroll-down. *Expected impact: directly adds a booking path for the majority of visitors.*
3. **Remove The Engine from slot #2 and replace with What We Do (3 cards).** The highest-attention slot stops confusing and starts selling. *Expected impact: lower early bounce; visitors reach the proof sections with momentum instead of fog.*
4. **Contact-form friction cuts** — optional message, compressed GDPR text, `Book My Free Call` button, WhatsApp alternative. *Expected impact: converts visitors already at the form — the cheapest wins available; the WhatsApp channel alone should capture leads the form never would.*
5. **Add the FAQ + "What Happens After You Book."** Handles the objections (cost, DIY, fear of the sales call) that currently have no answer except leaving. *Expected impact: recovers the hesitant middle — typically the largest segment on high-consideration pages.*
6. **Fill the CTA desert** — section-end CTAs after What We Do and The Process, and upgrade Pricing's footnote to a real closing block. *Expected impact: harvests intent at its peaks instead of letting it dissipate between sections.*
7. **Remove the unanchored stats section + put one true fact on each portfolio card.** Replaces trust-eroding round numbers with verifiable specifics. *Expected impact: smaller direct lift, but protects the credibility every other section depends on.*

## 5b. Before vs After Funnel Map

**BEFORE (current page):**

```
[HERO] — clear ✓, CTA ✓
     ↓
[THE ENGINE] — jargon diagram, no CTA        ✗ DROP-OFF: confusion at slot #2
     ↓
[WHAT WE DO — 6 cards] — menu overload, no CTA
     ↓                                        ✗ DROP-OFF: 4-section CTA desert begins
[THE PROCESS] — good copy, no CTA
     ↓
[STATS] — "3x / 2x" unanchored               ✗ DROP-OFF: skepticism triggered
     ↓
[PRICING — €2,000/€5,000] — before any proof ✗ DROP-OFF: price shock, biggest leak
     ↓
[TESTIMONIALS] — proof arrives too late
     ↓
[OUR WORK] — best section, buried; links leak to vercel.app tabs
     ↓
[CONTACT] — "Autopilot?" + required message + GDPR wall + no WhatsApp
                                              ✗ DROP-OFF: friction at the finish line
(mobile: no persistent CTA anywhere)          ✗ MAJORITY OF TRAFFIC
```

**AFTER (redesigned page):**

```
[NAV: "Book a Call"]          [MOBILE: sticky "Book a Free Call" bar — always visible]
     ↓
[HERO — what/for whom/trust]
     ↓
[CTA: "Book a Free Call" · 30 min · no obligation]   [ghost: "See Our Work" ↓]
     ↓
[WHO WE WORK WITH — clinics · restaurants · salons · trades]
     ↓
[WHAT WE DO — 3 problem-shaped cards]
     ↓
[CTA: "Book a Free Call — We'll Tell You Honestly"]
     ↓
[OUR WORK — 5 real Cyprus businesses + 1 true fact each]
     ↓
[CTA: "Start Your Project"]
     ↓
[THE PROCESS — 3 steps, step 1 is free]
     ↓
[CTA: "Book Your Discovery Call"]
     ↓
[LOCAL TRUST + TESTIMONIALS — names, business types, ★5.0 Google link]
     ↓
[PRICING — "Best for:" on each package]
     ↓
[CTA: "Book a Free 30-Minute Call" — honest-advice block]
     ↓
[FAQ — cost, DIY, "not technical", timing]
     ↓
[CTA: "Book a Free Call"  ·  "WhatsApp us →"]
     ↓
[CONTACT — "What happens after you book" + 3-field form]
     ↓
[CTA: "Book My Free Call"  ·  alt: WhatsApp / email]
     ↓
✅ BOOKED CALL
(leavers exit past quiet SEO links → may convert on a landing page)
```

## 5c. Copy Replacement Cheat Sheet

| Location | Current Copy | Replacement Copy |
|---|---|---|
| Hero badge | Cyprus Web Design Agency | For clinics, restaurants & service businesses in Cyprus |
| Hero primary CTA | Book a Free Strategy Call | Book a Free Call *(+ "30 minutes · no obligation · honest advice")* |
| Hero secondary CTA | See What We Do | See Our Work *(→ #projects)* |
| Services H2 | Everything You Need to Grow Online | Three Things. Done Properly. |
| Services subhead | …a fully automated client acquisition engine — we build the systems that scale your business | From your first website to online bookings and automatic reminders — everything you need to win clients online. |
| Service card | Client Acquisition — Automated lead generation pipelines that bring qualified prospects to your doorstep | Get Found on Google — When someone in Cyprus searches for what you do, you show up — and that turns into enquiries. |
| Service card | Booking System Integration | Online Booking That Runs Itself |
| Process Step 2 | …builds your digital ecosystem… | We design and build your website, your booking system, and your automatic reminders — all matched to your brand and ready to bring in clients. |
| Process Step 3 title | Grow on Autopilot | Watch the Bookings Come In |
| Engine headline | One System. Every Growth Lever. | *(section removed from homepage)* |
| Our Reach stat | Speed — Core Web Vitals optimised | Loads instantly — even on a phone |
| Our Reach stat | SEO — Google-first development | Your clients find you on Google |
| Pricing — Growth outcome | Stop chasing clients. Let your website bring them to you on autopilot. | Stop chasing clients — your website books them for you, even after hours. |
| Pricing — Scale outcome | Turn your website into a self-running growth machine that compounds over time. | Your website becomes your best salesperson, working around the clock. |
| Pricing closing | *(12px footnote)* | Not sure which package fits? That's exactly what the free call is for — we'll tell you honestly, even if the answer is "the cheapest one." **[Book a Free 30-Minute Call]** |
| Contact heading | Ready to Put Your Growth on Autopilot? | Let's Get You More Clients — **Book Your Free Call** |
| Contact benefit | See projected ROI before you invest | Know the cost and what you'll get — before you spend a cent |
| Contact message label | How can we help? *(required)* | Anything you'd like to tell us? *(optional)* |
| Contact GDPR intro | *(~100-word paragraph)* | We'll only use your details to reply to you. Full details in our Privacy Policy. |
| Contact submit | Send Message | Book My Free Call |
| Under submit | *(nothing)* | No contract. No pressure. If we're not the right fit, we'll say so. |
| Below form | *(nothing)* | Prefer to talk? **WhatsApp us →** · or email hello@clovo-solutions.com |
| SEO links eyebrow | Explore Our Services | More From Clovo |

---

**Implementation note:** the reorder, copy swaps, and section removals are a day's work; the sticky mobile bar, FAQ, and strip components are the only net-new builds. **Commit everything when done** — the May 2026 CRO components were lost precisely because they never reached git.
