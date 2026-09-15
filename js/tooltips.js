// Tooltips for any [data-tooltip="..."] element, anywhere on the page --
// including elements that don't exist yet at load time (cloned <template>
// rows), since every listener here is delegated on `document`.
//
// One real, shared <div class="tooltip"> is created once and repositioned/
// retexted for whichever trigger is active, instead of a ::after pseudo-
// element per trigger. See css/shared-canapi-styles.css ".tooltip" for why.
//
// Touch: a trigger that's a real link (has an href) just navigates on tap --
// no tooltip, since there's no separate "hover" gesture to disambiguate the
// two on a touchscreen, and the tooltip text is supplementary context the
// destination page already covers. A non-navigating trigger (a bare button/
// icon with no href) shows the tooltip on tap, and tapping anywhere else
// dismisses it.
window.addEventListener("load", function(){

  console.log(`[${window.siteData.project}] tooltips.js loaded`);

  const GAP = 8;
  const VIEWPORT_PADDING = 8;

  const tooltipEl = document.createElement("div");
  tooltipEl.className = "tooltip";
  tooltipEl.id = "shared-tooltip";
  tooltipEl.setAttribute("role", "tooltip");
  document.body.appendChild(tooltipEl);

  let activeTrigger = null;

  function positionTooltip(trigger){
    const triggerRect = trigger.getBoundingClientRect();
    const tipRect = tooltipEl.getBoundingClientRect();

    let top = triggerRect.bottom + GAP;
    if (top + tipRect.height > window.innerHeight - VIEWPORT_PADDING){
      // no room below -- flip above the trigger instead
      top = triggerRect.top - tipRect.height - GAP;
    }
    top = Math.max(VIEWPORT_PADDING, top);

    let left = triggerRect.left;
    if (left + tipRect.width > window.innerWidth - VIEWPORT_PADDING){
      // would overflow the right edge -- align to the trigger's right side instead
      left = triggerRect.right - tipRect.width;
    }
    left = Math.max(VIEWPORT_PADDING, left);

    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
  }

  function showTooltip(trigger){
    // disabled triggers show a generic explanation instead of their normal
    // tooltip text (see global-tb-styles.css [disabled] rules, and
    // instance.js's updateActionButtonsDisabledState for why this matters --
    // this used to be a ::after `content` override, same behavior, real element now)
    const text = trigger.hasAttribute("disabled")
      ? "Functionality not supported"
      : trigger.getAttribute("data-tooltip");
    if (!text) return;

    activeTrigger = trigger;
    tooltipEl.textContent = text;
    trigger.setAttribute("aria-describedby", "shared-tooltip");
    tooltipEl.classList.add("is-visible");
    positionTooltip(trigger);
  }

  function hideTooltip(){
    if (activeTrigger) activeTrigger.removeAttribute("aria-describedby");
    activeTrigger = null;
    tooltipEl.classList.remove("is-visible");
  }

  function isRealLink(trigger){
    return trigger.tagName === "A" && trigger.hasAttribute("href");
  }

  // hover (mouse)
  document.addEventListener("mouseover", function(e){
    const trigger = e.target.closest("[data-tooltip]");
    if (trigger) showTooltip(trigger);
  });
  document.addEventListener("mouseout", function(e){
    const trigger = e.target.closest("[data-tooltip]");
    if (!trigger || trigger !== activeTrigger) return;
    // moving to a child within the same trigger isn't leaving it
    if (trigger.contains(e.relatedTarget)) return;
    hideTooltip();
  });

  // keyboard focus
  document.addEventListener("focusin", function(e){
    const trigger = e.target.closest("[data-tooltip]");
    if (trigger) showTooltip(trigger);
  });
  document.addEventListener("focusout", function(e){
    const trigger = e.target.closest("[data-tooltip]");
    if (!trigger || trigger !== activeTrigger) return;
    if (trigger.contains(e.relatedTarget)) return;
    hideTooltip();
  });

  // tap (touch devices have no hover -- click fires naturally on tap,
  // after touchend, so this doesn't need its own touchstart/preventDefault
  // and composes safely with any other click handler already on the
  // trigger, e.g. the chart-type-toggle button also has one)
  document.addEventListener("click", function(e){
    const trigger = e.target.closest("[data-tooltip]");

    if (!trigger){
      if (activeTrigger) hideTooltip();
      return;
    }

    if (isRealLink(trigger)) return; // let the tap navigate, no tooltip

    if (trigger === activeTrigger) hideTooltip();
    else showTooltip(trigger);
  });

  // position:fixed is viewport-relative, so scroll/resize can leave an
  // open tooltip pointing at the wrong spot
  window.addEventListener("scroll", function(){
    if (activeTrigger) positionTooltip(activeTrigger);
  }, true);
  window.addEventListener("resize", function(){
    if (activeTrigger) positionTooltip(activeTrigger);
  });

}, false);
