# terrabyte-web-ui

Design system of reusable components and styles for building Terrabyte web projects.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Versioning & Releases](#versioning--releases)

## Installation

```bash
pnpm install
```

## Project Structure

```
terrabyte-web-ui/
├── css/                          # Stylesheets
├── data/                         # Data files (JSON)
├── img/                          # Images and graphic assets
├── js/                           # Site script files
├── layouts/                      # Page layout templates
├── macros/                       # Reusable components
├── partials/                     # Drop-in elements
├── scripts/                      # Dev and utility scripts
├── utils/                        # Site filters and transforms
├── package.json
└── README.md
```

### Styles

Global styles are provided in the `css/` directory:
- `global-tb-styles.css` - Base Terrabyte styles
- `global-tb-ui-styles.css` - UI component styles
- `shared-canapi-styles.css` - Shared Canapi styles
- `shared-pixel-styles.css` - Shared pixel styles

## Development

### Available Scripts

- `pnpm install` - Install dependencies
- `pnpm run <script-name>` - Run any script defined in package.json
  - `build`: Run Eleventy build process
  - `start`: Serve project to preview in browser


## Versioning & Releases

This project follows [Semantic Versioning](https://semver.org/).

### Bumping the Version

Use the release script to automatically bump the version, create a git tag, and push to the repository.

#### Prerequisites
- Git must be configured and you must have push access to the repository
- For automated GitHub releases: [GitHub CLI](https://cli.github.com/) must be installed and authenticated

#### Commands

Open a **bash terminal** and run:

**Patch release** (e.g., 1.0.0 → 1.0.1):
```bash
./scripts/release.sh patch
```

**Minor release** (e.g., 1.0.0 → 1.1.0):
```bash
./scripts/release.sh minor
```

**Major release** (e.g., 1.0.0 → 2.0.0):
```bash
./scripts/release.sh major
```

#### With GitHub Release (not yet implemented)

To automatically create a GitHub release in addition to the version bump:

```bash
./scripts/release.sh patch --publish
./scripts/release.sh minor --publish
./scripts/release.sh major --publish
```

The script will:
1. Bump the version in `package.json`
2. Create a git commit with the new version
3. Create an annotated git tag
4. Push the commit and tag to the repository
5. (Optional with `--publish`) Create a release on GitHub
