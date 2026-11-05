// src/components/analytics/google-analytics.tsx
"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { SITE_CONFIG } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const AI_ENGINE_HOSTS = [
  { pattern: "chatgpt.com", engine: "ChatGPT" },
  { pattern: "openai.com", engine: "OpenAI" },
  { pattern: "perplexity.ai", engine: "Perplexity" },
  { pattern: "claude.ai", engine: "Claude" },
  { pattern: "anthropic.com", engine: "Claude" },
  { pattern: "gemini.google.com", engine: "Google Gemini" },
  { pattern: "copilot.microsoft.com", engine: "Microsoft Copilot" },
  { pattern: "you.com", engine: "You.com" },
  { pattern: "phind.com", engine: "Phind" },
  { pattern: "meta.ai", engine: "Meta AI" },
];

const ORGANIC_SEARCH_PATTERNS = [
  "google.",
  "bing.com",
  "duckduckgo.com",
  "brave.com",
  "search.yahoo.com",
  "ecosia.org",
];

const SOCIAL_AND_VIDEO_PATTERNS = [
  "linkedin.com",
  "lnkd.in",
  "x.com",
  "twitter.com",
  "t.co",
  "youtube.com",
  "facebook.com",
  "instagram.com",
  "reddit.com",
];

const LAUNCH_AND_DIRECTORY_PATTERNS = [
  "producthunt.com",
  "g2.com",
  "capterra.com",
  "crunchbase.com",
  "alternativeto.net",
  "upwork.com",
  "f6s.com",
  "clutch.co",
];

const PARTNER_ECOSYSTEM_PATTERNS = [
  "techfusion-ventures.xyz",
  "muzikhuzwayo.xyz",
  "ssrn.com",
];

export type TrafficChannelBucket =
  | "ai_answer_engine"
  | "organic_search"
  | "social_and_video"
  | "launch_and_directories"
  | "partner_ecosystem"
  | "direct";

export function classifyLandingTraffic(referrer: string, utmSource: string): {
  bucket: TrafficChannelBucket;
  sourceName: string;
} {
  const ref = (referrer || "").toLowerCase();
  const utm = (utmSource || "").toLowerCase();
  const combined = `${ref} ${utm}`;

  const aiMatch = AI_ENGINE_HOSTS.find(
    (item) => ref.includes(item.pattern) || utm.includes(item.pattern.split(".")[0])
  );
  if (aiMatch) {
    return { bucket: "ai_answer_engine", sourceName: aiMatch.engine };
  }

  const searchMatch = ORGANIC_SEARCH_PATTERNS.find((p) => combined.includes(p));
  if (searchMatch) {
    return { bucket: "organic_search", sourceName: searchMatch.replace(".", "") };
  }

  const socialMatch = SOCIAL_AND_VIDEO_PATTERNS.find((p) => combined.includes(p));
  if (socialMatch) {
    return { bucket: "social_and_video", sourceName: socialMatch };
  }

  const launchMatch = LAUNCH_AND_DIRECTORY_PATTERNS.find((p) => combined.includes(p));
  if (launchMatch) {
    return { bucket: "launch_and_directories", sourceName: launchMatch };
  }

  const partnerMatch = PARTNER_ECOSYSTEM_PATTERNS.find((p) => combined.includes(p));
  if (partnerMatch) {
    return { bucket: "partner_ecosystem", sourceName: partnerMatch };
  }

  return { bucket: "direct", sourceName: utm || (ref ? "referral_other" : "direct") };
}

function AnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track route changes
  useEffect(() => {
    if (!gaId || typeof window === "undefined" || typeof window.gtag !== "function") return;
    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("config", gaId, {
      page_path: pagePath,
      page_location: window.location.href,
    });
  }, [pathname, searchParams, gaId]);

  // Phase 1.6: Classify first-party SEO / AEO / GEO landing traffic on session start
  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyTracked = sessionStorage.getItem("tf_landing_view_tracked");
    if (alreadyTracked) return;

    const referrer = document.referrer || "";
    const utmSource = searchParams?.get("utm_source") || "";
    const utmMedium = searchParams?.get("utm_medium") || "";
    const utmCampaign = searchParams?.get("utm_campaign") || "";

    const { bucket, sourceName } = classifyLandingTraffic(referrer, utmSource);
    sessionStorage.setItem("tf_landing_view_tracked", "1");

    trackEvent("landing_view", {
      traffic_bucket: bucket,
      traffic_source: sourceName,
      referrer_url: referrer || "none",
      utm_source: utmSource || "none",
      utm_medium: utmMedium || "none",
      utm_campaign: utmCampaign || "none",
      landing_page: pathname,
    });

    if (bucket === "ai_answer_engine") {
      trackEvent("ai_engine_referral", {
        ai_engine: sourceName,
        referrer_url: referrer || "utm_parameter",
        landing_page: pathname,
      });
    }
  }, [pathname, searchParams]);

  // Delegate outbound Calendly click tracking across the entire application
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (href.includes("calendly.com")) {
        let ctaLocation = "general";
        try {
          const url = new URL(href);
          ctaLocation = url.searchParams.get("utm_content") || anchor.innerText.trim().slice(0, 50) || "calendly_cta";
        } catch {
          ctaLocation = anchor.innerText.trim().slice(0, 50) || "calendly_cta";
        }

        trackEvent("calendly_booking_click", {
          cta_location: ctaLocation,
          page_path: window.location.pathname,
          outbound_url: href,
        });
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return null;
}

export function GoogleAnalytics() {
  const gaId = SITE_CONFIG.gaMeasurementId;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}
      <Suspense fallback={null}>
        <AnalyticsTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
