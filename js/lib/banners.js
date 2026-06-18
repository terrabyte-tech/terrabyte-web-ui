/**
 * showBanner — programmatically creates a banner toast matching the
 * structure and CSS of the @terrabyte/web-ui banner component.
 *
 * @param {string} content   — Inner HTML / text for the banner body
 * @param {object} [opts]
 * @param {string} [opts.type]        — "info" | "warning" | "error" | "" (default = tbgreen / success)
 * @param {number} [opts.timeout]     — ms before auto-dismiss (default 4000; pass 0 to disable)
 * @param {boolean} [opts.dismissible]— Show a close button (default true)
 */
export function showBanner(content, { type = '', timeout = 4000, dismissible = true } = {}) {
  const container = document.querySelector('.banner-container');
  if (!container) return;

  const banner = document.createElement('div');
  banner.className = ['banner', 'top', type].filter(Boolean).join(' ');
  banner.setAttribute('role', 'alert');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('data-au', 'flex-container align-center small-gap');

  const body = document.createElement('div');
  body.className = 'banner-content';
  body.setAttribute('data-au', 'flex-width');
  body.textContent = content;
  banner.appendChild(body);

  if (dismissible) {
    const btn = document.createElement('button');
    btn.className = 'dismiss-banner-button';
    btn.setAttribute('aria-label', 'Dismiss notification');
    btn.textContent = 'Close';
    btn.addEventListener('click', () => banner.setAttribute('hidden', ''));
    banner.appendChild(btn);
  }

  container.appendChild(banner);

  if (timeout > 0) {
    setTimeout(() => banner.setAttribute('hidden', ''), timeout);
  }
}
