module.exports = function(eleventyConfig) {

  // -----------------------------
  // SPLIT FILTER (already safe)
  // -----------------------------
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator);
  });

  // -----------------------------
  // CANONICAL URL (shared-safe)
  // -----------------------------
  eleventyConfig.addFilter("canonicalUrl", function(pageUrl, site) {
    // 1. Resolve site.url safely
    const siteUrl =
      site?.url ||
      this?.ctx?.site?.url ||   // Eleventy global data
      this?.ctx?.page?.site?.url || // fallback if nested
      "";

    const base = siteUrl.replace(/\/$/, "");

    // 2. Resolve page URL safely
    const resolvedPageUrl =
      pageUrl ||
      this?.ctx?.page?.url ||
      "";

    // 3. Homepage case
    if (
      resolvedPageUrl === "" ||
      resolvedPageUrl === "/" ||
      resolvedPageUrl === "/index.html"
    ) {
      return base;
    }

    // 4. Normalize leading slash
    const rel = resolvedPageUrl.startsWith("/")
      ? resolvedPageUrl
      : `/${resolvedPageUrl}`;

    return base + rel;
  });

};