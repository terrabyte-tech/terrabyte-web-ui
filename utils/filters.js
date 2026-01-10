module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator);
  });

  eleventyConfig.addFilter("canonicalUrl", function(pageUrl, site) {
    const base = site.url.replace(/\/$/, "");
    if (!pageUrl || pageUrl === "/" || pageUrl === "/index.html") {
      return base;
    }
    const rel = pageUrl.startsWith("/") ? pageUrl : `/${pageUrl}`;
    return base + rel;
  });
};
