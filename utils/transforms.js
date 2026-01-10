const cheerio = require("cheerio");

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("injectSrToc", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const $ = cheerio.load(content);

      const sections = [];
      $("section[id]").each((i, elem) => {
        const id = $(elem).attr("id");
        const title = id + " section";
        sections.push({ id, title });
      });

      if (sections.length) {
        const tocHtml = `
<nav class="sr-only sr-toc" aria-label="Table of Contents" role="navigation">
  <h2>Page Table of Contents</h2>
  <ul>
    <li><a class="text-link" href="#top">Jump to content</a></li>
    ${sections.map(s => `<li><a href="#${s.id}" class="text-link" tabindex="0">${s.title}</a></li>`).join("\n")}
  </ul>
</nav>
        `;
        $("body").prepend(tocHtml);
        return $.html();
      }
    }
    return content;
  });
};
