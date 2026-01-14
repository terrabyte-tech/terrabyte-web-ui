#!/bin/bash

# Bump version
npm version patch --no-git-tag-version

# Stage and commit updated
git add package.json pnpm-lock.json
VERSION=$(node -p "require('./package.json').version")
git commit -m "chore(release): v$VERSION - updatepackage version"

# Tag the commit with the new version from package.json
git tag -a "v$VERSION" -m "Release $VERSION"

# Push commit and tag to origin
git push origin main
git push origin --tags

echo "version bumped to v$VERSION"
echo "annotated tag created and pushed"
echo "package ready to release!"
echo "-----------------------------------"