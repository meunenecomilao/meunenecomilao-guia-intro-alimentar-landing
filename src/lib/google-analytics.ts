import ReactGA from 'react-ga4';

export function initializeGoogleAnalytics(gaId: string) {
    ReactGA.initialize(gaId);
}

export function trackPageView(page: string) {
    ReactGA.send({ hitType: "pageview", page });
}

export function trackEvent(category: string, action: string, label?: string) {
    ReactGA.event({
        category,
        action,
        label
    });
}