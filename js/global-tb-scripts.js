window.addEventListener("load", function(){

  console.log(`[${window.siteData.project}] global-tb-scripts.js loaded`);

  // RECOMMENDED & UPDATED solution:
  // Utilize the 11ty Starter "currentYear" shortcode by including two "{" and currentYear inside.

  // LEGACY solution:
  // Replace the innerHTML on "current-year-text" with the current year
  // change copyright date
  const currentYear = new Date().getFullYear();

  // Try modern element first, fallback to legacy
  const target =
    document.getElementById("current-year-text") ||
    document.querySelector(".copyright-date");

  if (target) {
    target.textContent = currentYear;
  }
}, false);