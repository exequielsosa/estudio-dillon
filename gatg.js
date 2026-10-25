export const GA_TRACKING_ID = "G-VS1FLWWXPP"; //replace it with your measurement id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Eventos GA4 (Fase 0 del rediseño). No falla si gtag todavía no cargó
// o si un bloqueador de anuncios lo frena.
export const trackEvent = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  });
};
