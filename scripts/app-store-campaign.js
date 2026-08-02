(function () {
    "use strict";

    const pageParameters = new URLSearchParams(window.location.search);
    const campaignToken = pageParameters.get("ct");
    const providerToken = pageParameters.get("pt");
    const mediaType = pageParameters.get("mt") || "8";

    const validCampaignToken = campaignToken
        && campaignToken.length <= 30
        && campaignToken.trim() === campaignToken
        && !/[\u0000-\u001f\u007f]/.test(campaignToken);
    const validProviderToken = providerToken && /^\d{1,20}$/.test(providerToken);
    const validMediaType = /^\d{1,3}$/.test(mediaType);

    const links = Array.from(document.querySelectorAll("[data-app-store-campaign-link]"));
    const safeLinks = links.filter(function (link) {
        const appStoreURL = new URL(link.href);
        if (appStoreURL.hostname !== "apps.apple.com") {
            return false;
        }
        if (validCampaignToken && validProviderToken) {
            appStoreURL.searchParams.set("ct", campaignToken);
            appStoreURL.searchParams.set("pt", providerToken);
            appStoreURL.searchParams.set("mt", validMediaType ? mediaType : "8");
        }
        link.href = appStoreURL.toString();
        link.target = "_blank";
        link.rel = "noopener external";
        return true;
    });

    const isInstagramBrowser = /Instagram/i.test(navigator.userAgent);
    const primaryActions = safeLinks[0] && safeLinks[0].closest(".hero-actions");
    if (isInstagramBrowser && primaryActions) {
        const fallback = document.createElement("p");
        fallback.className = "app-store-open-help";
        fallback.textContent = "App Store not opening? Press and hold Download, then choose Open Link.";
        primaryActions.insertAdjacentElement("afterend", fallback);
    }

    if (document.body.hasAttribute("data-open-app-store") && safeLinks[0]) {
        window.location.replace(safeLinks[0].href);
    }
}());
