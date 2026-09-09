// Navalone Configs
new Navalone("#mm", {
  responsive: "static",
  breakpoint: 991.98,
  // position: "smart",
  menuAlign: "left",
  drawerSide: "right",
  openOn: "hover",
});

// Copyright Scripts
(function () {
  const now = new Date();
  const gregorianYear = now.getFullYear();

  const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
  })
    .format(now)
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  document.getElementById("years").textContent =
    `${gregorianYear} - ${persianYear}`;
})();

// Cursor Scripts
(function () {
  "use strict";

  const DOT_ID = "hoorasa-cursor-dot";
  const BORDER_ID = "hoorasa-cursor-border";
  const INTERACTIVE_SELECTOR = "a, button, img, input, textarea, select";

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_SMOOTHNESS = 0.1;

  const mouse = { x: 0, y: 0 };
  const dot = { x: 0, y: 0 };
  const border = { x: 0, y: 0 };

  const dotEl = document.getElementById(DOT_ID);
  const borderEl = document.getElementById(BORDER_ID);

  if (!dotEl || !borderEl) return;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onEnter() {
    borderEl.classList.add("is-hovering");
  }

  function onLeave() {
    borderEl.classList.remove("is-hovering");
  }

  window.addEventListener("mousemove", onMouseMove, { passive: true });

  const interactive = document.querySelectorAll(INTERACTIVE_SELECTOR);
  interactive.forEach(function (el) {
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
  });

  function animate() {
    dot.x = lerp(dot.x, mouse.x, DOT_SMOOTHNESS);
    dot.y = lerp(dot.y, mouse.y, DOT_SMOOTHNESS);
    border.x = lerp(border.x, mouse.x, BORDER_SMOOTHNESS);
    border.y = lerp(border.y, mouse.y, BORDER_SMOOTHNESS);

    dotEl.style.left = dot.x + "px";
    dotEl.style.top = dot.y + "px";
    borderEl.style.left = border.x + "px";
    borderEl.style.top = border.y + "px";

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();

// CTA magnetic button
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var btn = document.querySelector("[data-cta-magnetic]");
  if (!btn) return;

  var strength = 12;

  function onMove(e) {
    var rect = btn.getBoundingClientRect();
    var x = e.clientX - rect.left - rect.width / 2;
    var y = e.clientY - rect.top - rect.height / 2;
    var dist = Math.sqrt(x * x + y * y);
    var max = Math.max(rect.width, rect.height);
    if (dist > max) {
      btn.style.setProperty("--mx", "0px");
      btn.style.setProperty("--my", "0px");
      return;
    }
    var factor = 1 - dist / max;
    btn.style.setProperty("--mx", (x / rect.width) * strength * factor + "px");
    btn.style.setProperty("--my", (y / rect.height) * strength * factor + "px");
  }

  function onLeave() {
    btn.style.setProperty("--mx", "0px");
    btn.style.setProperty("--my", "0px");
  }

  btn.addEventListener("mousemove", onMove, { passive: true });
  btn.addEventListener("mouseleave", onLeave);
})();
