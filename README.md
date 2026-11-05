# Techfusion Alchemy (`techfusion-alchemy.xyz`)

Official web platform for **Techfusion Alchemy**, the specialized AI & backend workflow automation engineering division of **Techfusion Automata (Pty) Ltd** (CIPC Reg: `2026/399837/07`), a **Techfusion Ventures** company (`https://techfusion-ventures.xyz`), founded and directed by **Muzikayise Khuzwayo**.

## Canonical Domain & Architecture

- **Production Domain:** `https://techfusion-alchemy.xyz` (configured in [`src/lib/site-config.ts`](src/lib/site-config.ts))
- **Parent Group:** `https://techfusion-ventures.xyz`
- **Primary Contact:** `muzi@techfusion-alchemy.xyz`
- **Calendly Architecture Session:** `https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes`

## SEO, AEO, GEO & GA4 Telemetry Stack

1. **Canonical SEO & Metadata (`src/app/layout.tsx` & route layouts):**
   - Unified `metadataBase` (`https://techfusion-alchemy.xyz`), per-route titles/descriptions/canonical URLs, OpenGraph (`en_ZA`), and `noindex` on `/contact/thank-you`.
   - Dynamic [`/sitemap.xml`](src/app/sitemap.ts) and [`/robots.ts`](src/app/robots.ts) with explicit allow rules for `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended`.
2. **AEO Structured Data (`src/components/seo/structured-data.tsx`):**
   - JSON-LD `@graph` embedding `Organization`, `ProfessionalService`, `OfferCatalog` (5-Day Pilot Sprint, Core Pipeline Build, Fractional Automation Lead), `Person` (Muzikayise Khuzwayo), `WebSite`, and `FAQPage`.
   - On-page crawlable `<FAQSection />` ([`src/components/magic/faq-section.tsx`](src/components/magic/faq-section.tsx)) and SSR indexable archives for all interactive tabs (`SuccessStories`, `ArchitectureFlow`, `LegalPage`).
3. **GEO Machine Context (`public/llms.txt` & `public/llms-full.txt`):**
   - Standardized markdown knowledge bases at `/llms.txt` and `/llms-full.txt` for direct ingestion by LLM answer engines.
4. **GA4 & Conversion Funnel Analytics (`src/components/analytics/google-analytics.tsx` & `src/lib/analytics.ts`):**
   - Set `NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"` in `.env` to activate GA4 (`gtag.js`).
   - Tracks custom events:
     - `ai_engine_referral` (automatically detects referrals from ChatGPT, Perplexity, Claude, Gemini, Copilot, etc.)
     - `calendly_booking_click` (tracks outbound Calendly clicks with `cta_location` and UTM attribution)
     - `contact_wizard_step` (tracks step-by-step progression through the 7-question diagnostic wizard)
     - `chatbot_open` & `chatbot_message_sent` (tracks AI assistant engagement)
     - `generate_lead` (fires when a lead is captured via the Contact Wizard or Gemini Chatbot tool call)

## Development

```bash
npm run dev       # Starts Next.js dev server on port 9002
npm run typecheck # Runs TypeScript validation
npm run build     # Builds production bundle
```
