# Terrabyte Web UI
`Terrabyte Tools`

Design system of reusable components and styles for building Terrabyte web projects via node (NPM) package.

**NOTE:** Until Terrabyte contributors have more capacity, the Web UI package will be indefinitely paused. We have found that creating, managing, and further supporting a full UI Package is out of our depth for the time being. If you have interest in further developing our (beginnings of the) design system, please reach out (or make a PR)! In the meantime, please see the [boilerplate](https://github.com/terrabyte-tech/terrabyte-11ty-starter) for creating Terrabyte websites.


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
- `global-tb-styles.css` - Base Terrabyte styles; CSS variables light/dark colors
- `global-tb-ui-styles.css` - UI component styles; Cross-domain styles and components
- `shared-canapi-styles.css` - Shared Canapi styles; Global styles specific to Canapi branding
- `shared-pixel-styles.css` - Shared pixel styles; typography, imagery, etc.

## Development

### Available Scripts

- `pnpm install` - Install dependencies
- `pnpm run <script-name>` - Run any script defined in `package.json`
  - `build`: Run Eleventy build process
  - `start`: Serve project to preview in browser


## Versioning & Releases

This project follows [Semantic Versioning](https://semver.org/).

#### Prerequisites
- Git must be configured and you must have push access to the repository
- Have npm/pnpm installed on your machine

#### Commands (WIP)

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