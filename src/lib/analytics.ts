// src/lib/analytics.ts
"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: AnalyticsEventParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }
}

export function trackContactStep(stepIndex: number, stepId: string) {
  trackEvent("contact_wizard_step", {
    step_number: stepIndex + 1,
    step_id: stepId,
  });
}

export function trackLeadGenerated(source: "contact_wizard" | "ai_chatbot", companyName?: string) {
  trackEvent("generate_lead", {
    lead_source: source,
    company_name: companyName || "unspecified",
    currency: "USD",
    value: 1500, // Estimated baseline pipeline value per qualified architecture lead
  });
}

export function trackChatEvent(action: "open" | "message_sent" | "quick_starter_clicked", label?: string) {
  trackEvent(`chatbot_${action}`, {
    event_category: "engagement",
    event_label: label,
  });
}
