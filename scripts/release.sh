#!/bin/bash

# Check if version type is provided
if [ -z "$1" ]; then
  echo "Usage: ./release.sh <major|minor|patch> [--publish]"
  echo ""
  echo "Options:"
  echo "  --publish    Create a GitHub release (requires GitHub CLI)"
  exit 1
fi

VERSION_TYPE=$1
PUBLISH_RELEASE=$2

# Bump version
npm version $VERSION_TYPE --no-git-tag-version

# Stage and commit updated
git add package.json pnpm-lock.yaml
VERSION=$(node -p "require('./package.json').version")
git commit -m "chore(release): v$VERSION - update package version"

# Tag the commit with the new version from package.json
git tag -a "v$VERSION" -m "Release $VERSION"

# Push commit and tag to origin
git push origin main
git push origin --tags

# Create GitHub release if --publish flag is provided
if [ "$PUBLISH_RELEASE" == "--publish" ]; then
  if command -v gh &> /dev/null; then
    gh release create "v$VERSION" --title "Release $VERSION" --notes "Version bumped to v$VERSION"
    echo ""
    echo "✓ GitHub release created successfully!"
  else
    echo ""
    echo "⚠ GitHub CLI not found. Skipping release creation."
    echo "Install GitHub CLI to create releases automatically."
    echo "Then run: gh release create v$VERSION --title \"Release $VERSION\" --notes \"Version bumped to v$VERSION\""
  fi
else
  echo ""
  echo "⚠ Skipping GitHub release creation."
  echo "To create a release, run: ./release.sh $VERSION_TYPE --publish"
fi

echo ""
echo "Version bumped to v$VERSION"
echo "Annotated tag created and pushed"
echo "Package ready to release!"
echo "-----------------------------------"

# Make the script executable
chmod +x scripts/release.sh