const cheerio = require("cheerio");

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("injectSrToc", function(content, outputPath) {
    try {
      // Only operate on HTML files
      if (typeof outputPath !== "string" || !outputPath.endsWith(".html")) {
        return content;
      }

      // Ensure content is valid HTML-ish
      if (!content || typeof content !== "string") {
        return content;
      }

      const $ = cheerio.load(content);

      // If cheerio failed to parse, bail safely
      if (!$ || typeof $ !== "function") {
        return content;
      }

      const sections = [];
      $("section[id]").each((i, elem) => {
        const id = $(elem).attr("id");
        if (!id) return;

        const title = `${id} section`;
        sections.push({ id, title });
      });

      // No sections? No TOC.
      if (sections.length === 0) {
        return content;
      }

      const tocHtml = `
<nav class="sr-only sr-toc" aria-label="Table of Contents" role="navigation">
  <h2>Page Table of Contents</h2>
  <ul>
    <li><a class="text-link" href="#top">Jump to content</a></li>
    ${sections
      .map(
        s =>
          `<li><a href="#${s.id}" class="text-link" tabindex="0">${s.title}</a></li>`
      )
      .join("\n")}
  </ul>
</nav>
      `;

      // Ensure <body> exists before prepending
      if ($("body").length > 0) {
        $("body").prepend(tocHtml);
        return $.html();
      }

      // If no <body>, return original content untouched
      return content;

    } catch (err) {
      // Never break the build — fail silently
      return content;
    }
  });
};