window.addEventListener("load", function(){

  console.log(`[${window.siteData.project}] global-tb-scripts.js loaded`);

////////////////////
// COPYRIGHT YEAR

  // RECOMMENDED & UPDATED solution:
  // Utilize the 11ty Starter "currentYear" shortcode by including two "{" and currentYear inside. Put this inside the span with id "current-year-text". This way, the year will be generated at build time and will be correct when the page loads. The JavaScript will still check if the year is correct and update it if necessary, but in most cases, it should already be correct from the start.

  // LEGACY solution:
  // Replace the innerHTML on "current-year-text" with the current year
  // change copyright date
  const currentYear = new Date().getFullYear();

  // Try modern element first, fallback to legacy
  const target =
    document.getElementById("current-year-text") ||
    document.querySelector(".copyright-date");

  if (target){
    if (target.textContent.trim() != currentYear){
      target.textContent = currentYear;
    }
  }

////////////////////
// JS OBFUSCATION
  const infoEmail = "info" + "@" + "terrabyte.eco";

  // Obfuscate email addresses to prevent scraping
  const obfuElems = document.querySelectorAll("[data-obfu-email]");
  obfuElems.forEach(function(elem) {
    const params = elem.getAttribute("href") || "";
    elem.href = "mailto:" + infoEmail + params;

    // set text content for obfu email
    const obfuTextElem = elem.querySelector("[data-obfu-email-text]");

    if (obfuTextElem){
      obfuTextElem.textContent = infoEmail;
    }
  });

}, false);