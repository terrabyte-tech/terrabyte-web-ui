// increments/bumps version

// # //////////
// # YOU CAN JUST DO THIS IN PNPM!? > pnpm version patch
// # ^ yes, but that doesn't include github tagging, etc. So still use this script :)
// # //////////

const { execSync } = require("child_process");

const type = process.argv[2];

if (!["patch", "minor", "major"].includes(type)) {
  console.error("Usage: pnpm run release <patch|minor|major>");
  process.exit(1);
}

execSync(`pnpm version ${type}`, { stdio: "inherit" });
execSync("git push && git push --tags", { stdio: "inherit" });
