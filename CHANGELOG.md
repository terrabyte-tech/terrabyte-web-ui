# Changelog

All notable changes to `@terrabyte/web-ui` are documented here.

## [1.1.4] - 2026-06-24
- 1.1.4
- fix: allow page styles and scripts to be either an array (multiple values) or a string (singular value)
- 1.1.3
- feat: support multiple page-styles and page-scripts in page frontmatter
- docs: fix typo in documentation-type comment
- 1.1.2
- fix: update links to legal pages in pixel footer
- fix: pixel footer accent colors and shared/overwriteable content
- fix: implement custom scrollbars as global shared styles
- 1.1.1
- feat!: mass restructure of styles and components to better utilize shared across projects
- 1.1.0
- feat: create changelog and include release info in changelog

## [1.1.3] - 2026-06-24
- 1.1.3
- feat: support multiple page-styles and page-scripts in page frontmatter
- docs: fix typo in documentation-type comment
- 1.1.2
- fix: update links to legal pages in pixel footer
- fix: pixel footer accent colors and shared/overwriteable content
- fix: implement custom scrollbars as global shared styles
- 1.1.1
- feat!: mass restructure of styles and components to better utilize shared across projects
- 1.1.0
- feat: create changelog and include release info in changelog

## [1.1.2] - 2026-06-23
- 1.1.2
- fix: update links to legal pages in pixel footer
- fix: pixel footer accent colors and shared/overwriteable content
- fix: implement custom scrollbars as global shared styles
- 1.1.1
- feat!: mass restructure of styles and components to better utilize shared across projects
- 1.1.0
- feat: create changelog and include release info in changelog

## [1.1.1] - 2026-06-18
- 1.1.1
- feat!: mass restructure of styles and components to better utilize shared across projects
- 1.1.0
- feat: create changelog and include release info in changelog

## [1.1.0] - 2026-06-17
- 1.1.0
- feat: create changelog and include release info in changelog

## [1.0.8] - 2026-06-17
- Replace `release.sh` with cross-platform `scripts/release.js`
- Add `pnpm run release <patch|minor|major>` as the standard release command
- Add Contact link to footer
- Support `sameAs` in `site.json`
- Add Twitter card metadata
- Fix OG metadata

## [1.0.7] - 2025
- Add disabled tooltip styles
- Fix styles for code blocks on Canapi websites
- Move shared styles from Canapi
- Fix default avatar colors
- Add 11ty block for adding project shared styles within template
- Fix page styles and page scripts reference inconsistencies
- Reconfigure blocks in base layout
- Add basic footer for projects
- Improve 11ty block structure for overwrites
- Add email input styles
- Add page styles and page scripts to `base.njk`
- Add njk block tags for overwriting parts of `base.njk`
- Add shared gap style elements
- Reorganize shared styles
- Add disabled and submit button styles
- Fix 11ty syntax for default color theme value
- Make body light theme by default
- Integrate `data-theme` variable in site data
- Fix images overflowing parent by default
- Add shared Canapi styles
- Fix canonical URL to include site context
- Add release scripts

## [1.0.6] - 2025
- Initial versioned release
- Add 11ty filters and transforms
- Add Eleventy filter and transform registration via `index.js`
- Set nunjucks environment for downstream project usage
- Add base layout, partials, macros, CSS, and JS foundations