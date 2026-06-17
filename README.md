# Terrabyte Web UI
`@terrabyte/web-ui`

Design system of reusable components and styles for building Terrabyte web projects.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Versioning & Releases](#versioning--releases)

## Installation

In a downstream Terrabyte project, install the package directly from GitHub:

```bash
pnpm install github:terrabyte-tech/terrabyte-web-ui
```

To install a specific version:

```bash
pnpm install github:terrabyte-tech/terrabyte-web-ui#v1.0.8
```

To check what version is currently installed in a project:

```bash
pnpm list @terrabyte/web-ui
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
- `global-tb-styles.css` - Base Terrabyte styles; CSS variables for light/dark colors
- `global-tb-ui-styles.css` - UI component styles; cross-domain styles and components
- `shared-canapi-styles.css` - Global styles specific to Canapi branding
- `shared-pixel-styles.css` - Shared pixel styles; typography, imagery, etc.

## Development

Install dependencies:

```bash
pnpm install
```

## Versioning & Releases

This project follows [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](./CHANGELOG.md) for version history.

### Prerequisites
- Git configured with push access to the repository
- pnpm installed

### Releasing a new version

From the project root, run:

```bash
pnpm run release patch   # bug fixes (1.0.0 → 1.0.1)
pnpm run release minor   # new features (1.0.0 → 1.1.0)
pnpm run release major   # breaking changes (1.0.0 → 2.0.0)
```

This will:
1. Bump the version in `package.json`
2. Create a git commit and annotated tag
3. Push the commit and tag to the repository

### Updating the package in a downstream project

```bash
pnpm install github:terrabyte-tech/terrabyte-web-ui
```
