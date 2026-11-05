// src/components/seo/structured-data.tsx
import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";

export const FAQ_ITEMS = [
  {
    question: "How does the 5-Day Pilot Sprint work?",
    answer:
      "The 5-Day Pilot Sprint is our fixed-scope entry engagement designed to prove engineering rigor on a single high-ROI operational bottleneck (such as sub-45s lead triage, PDF purchase order extraction, or bi-directional CRM synchronization). Within 5 business days of Statement of Work (SOW) sign-off, we architect, test, and deploy a self-contained production workflow complete with deterministic JSON schema validation, dead-letter queue (DLQ) failover, Slack/Telegram incident alerting, and a 14-day bugfix warranty.",
  },
  {
    question: "Why use custom n8n, Python, and Supabase instead of standard Zapier or Make templates?",
    answer:
      "Standard no-code zaps fail silently under rate limits, multi-page document layouts, or unexpected upstream API schema drift, leading to dropped leads and corrupted CRM records. We engineer deterministic backends using self-hosted or enterprise n8n, Python/FastAPI microservices, Pydantic schema contracts, idempotency keys, and PostgreSQL (Supabase) with dead-letter queues—ensuring zero data loss and full observability.",
  },
  {
    question: "How is our proprietary company data protected under POPIA and GDPR?",
    answer:
      "Techfusion Automata (Pty) Ltd (CIPC Reg: 2026/399837/07) operates under a strict Zero-AI-Model-Training Guarantee and complies with all 8 conditions of South Africa's Protection of Personal Information Act (POPIA, Act 4 of 2013) as well as GDPR. Client API tokens and database credentials are stored exclusively inside hardware-encrypted secret vaults (Supabase Vault / AWS KMS), and all LLM processing is ephemeral with zero third-party model training.",
  },
  {
    question: "Who builds and maintains our automation pipelines?",
    answer:
      "Every architecture session, system design, and production deployment is led directly by Founder & Principal AI Engineer Muzikayise Khuzwayo (Electrical & Computer Engineering background at the University of Cape Town, Dean's Merit List, Dell Young Leaders Scholar, and SSRN-published causal AI researcher). There are zero junior handoffs or agency account-manager layers.",
  },
  {
    question: "What happens if an upstream API like OpenAI, HubSpot, or WhatsApp goes down?",
    answer:
      "Every pipeline we deploy is built with production resilience: exponential backoff retries, idempotency deduplication keys, and an automated Dead-Letter Queue (DLQ). If a third-party API experiences downtime, payloads are safely queued and replayed once the service recovers, while real-time stack-trace alerts are dispatched to your engineering or operations Slack/Telegram channel.",
  },
  {
    question: "Who owns the intellectual property (IP) and source code after deployment?",
    answer:
      "Upon full payment of the agreed Statement of Work (SOW), your company receives a perpetual, worldwide, royalty-free license and full operational ownership of the bespoke workflow schemas, custom Python scripts, and database configurations built for your business—with zero vendor lock-in.",
  },
] as const;

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        alternateName: ["Techfusion Automata", "TechFusion Alchemy", "Techfusion Automata (Pty) Ltd"],
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/techfusion_automata_jpg_nobg.png`,
        image: SITE_CONFIG.ogImage,
        email: SITE_CONFIG.email,
        taxID: SITE_CONFIG.cipcReg,
        identifier: {
          "@type": "PropertyValue",
          name: "CIPC Registration Number",
          value: SITE_CONFIG.cipcReg,
        },
        description:
          "Boutique AI & backend automation engineering division of Techfusion Automata (Pty) Ltd. Specializing in sub-45s autonomous sales lead pipelines, Vision OMS document parsing, self-scaling marketing engines, and fault-tolerant n8n + Supabase infrastructure.",
        parentOrganization: {
          "@type": "Organization",
          name: SITE_CONFIG.parentCompany,
          url: SITE_CONFIG.parentUrl,
        },
        founder: {
          "@id": `${SITE_CONFIG.url}/about#muzikayise-khuzwayo`,
        },
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Cape Town",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Johannesburg",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
        ],
        areaServed: [
          { "@type": "Country", name: "South Africa" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Sweden" },
          { "@type": "Place", name: "Global" },
        ],
        knowsAbout: [
          "AI Workflow Automation",
          "n8n Enterprise Orchestration",
          "Supabase & PostgreSQL Architecture",
          "Purchase Order & Invoice Vision OCR Parsing",
          "Autonomous Sales Lead Triage",
          "CRM Bi-Directional Synchronization (HubSpot, GoHighLevel)",
          "POPIA & GDPR Compliant AI Engineering",
          "Dead-Letter Queue (DLQ) Failover Systems",
        ],
        sameAs: [
          SITE_CONFIG.parentUrl,
          SITE_CONFIG.founder.upworkUrl,
          SITE_CONFIG.founder.personalSite,
          SITE_CONFIG.founder.twitterUrl,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI & Backend Automation Engineering Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "The 5-Day Pilot Sprint",
                description:
                  "Fixed-scope 5-day sprint delivering 1 self-contained production workflow (e.g., lead triage, PO parsing, CRM sync) with deterministic JSON schemas, dead-letter queue alerting, and a 14-day bugfix warranty.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Core Pipeline Build",
                description:
                  "Comprehensive end-to-end multi-stage automation infrastructure across n8n, Supabase, FastAPI microservices, Vision OCR, and bi-directional CRM/ERP sync with a 30-day engineering warranty.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fractional Automation Lead",
                description:
                  "Dedicated senior ML & backend automation engineering retainer directly with Muzikayise Khuzwayo, including continuous workflow creation, 24/7 DLQ monitoring, and proactive bottleneck audits.",
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/about#muzikayise-khuzwayo`,
        name: SITE_CONFIG.founder.name,
        jobTitle: SITE_CONFIG.founder.role,
        url: `${SITE_CONFIG.url}/about`,
        worksFor: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Cape Town",
          sameAs: "https://www.uct.ac.za",
        },
        award: [
          "University of Cape Town Dean's Merit List (Electrical & Computer Engineering)",
          "Dell Young Leaders Scholar (Top 50 University-Wide)",
        ],
        sameAs: [
          SITE_CONFIG.founder.upworkUrl,
          SITE_CONFIG.founder.personalSite,
          SITE_CONFIG.founder.twitterUrl,
          SITE_CONFIG.parentUrl,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: `${SITE_CONFIG.name} | ${SITE_CONFIG.legalName}`,
        publisher: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        inLanguage: "en-ZA",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_CONFIG.url}/calculator#software`,
        name: "Techfusion Alchemy B2B Automation & Speed-to-Lead ROI Calculator",
        url: `${SITE_CONFIG.url}/calculator`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        publisher: {
          "@id": `${SITE_CONFIG.url}/#organization`,
        },
        featureList: [
          "Sub-45-Second Speed-to-Lead Conversion Lift Modeling",
          "Vision OMS & Multi-Page PDF Document Parsing Labor Savings",
          "Dead-Letter Queue (DLQ) Webhook Failure Prevention Valuation",
          "5-Day Pilot Sprint Payback Period & 12-Month ROI Multiplier",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free interactive B2B automation & speed-to-lead ROI diagnostic calculator.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.url}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
