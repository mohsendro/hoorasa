function B(p, r, e) {
  if (p.length > 0) {
    if (p[0].target === r)
      return p[0].contentRect.width;
    if (p.length === 2 && p[1].target === r)
      return p[1].contentRect.width;
  }
  return e;
}
class x {
  constructor(r) {
    this.container = r;
    const e = getComputedStyle(r), a = document.createElement("div");
    a.style.cssText = "position:absolute;visibility:hidden;height:0;width:100%";
    r.appendChild(a);
    this.containerWidth = a.offsetWidth;
    r.removeChild(a);
    this.gap = parseFloat(e.gap) || 0;
    this.columnWidth = 0;
    this.columns = 0;
    this.rows = [];
    this.observer = null;
    this.mutationObserver = null;
    this.raf = 0;
    this.init();
  }
  init() {
    this.container.style.display = "grid";
    this.container.style.overflow = "hidden";
    this.recalc();
    this.observer = new ResizeObserver((r) => {
      const e = B(r, this.container, this.containerWidth);
      if (e !== this.containerWidth) {
        this.containerWidth = e;
        this.schedule();
      }
    });
    this.observer.observe(this.container);
    this.mutationObserver = new MutationObserver(() => this.schedule());
    this.mutationObserver.observe(this.container, { childList: !0, subtree: !1 });
  }
  schedule() {
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => this.recalc());
  }
  recalc() {
    const r = Array.from(this.container.children).filter((e) => e.style.display !== "none" && !e.hasAttribute("data-masonry-spacer"));
    if (r.length === 0) return;
    const e = getComputedStyle(this.container), a = e.gridTemplateColumns;
    let n = 0;
    if (a && a !== "none") {
      const t = a.split(" ").filter((s) => s && s !== "0px");
      n = t.length;
    }
    if (n === 0) n = 1;
    this.columns = n;
    const i = this.containerWidth, o = this.gap, c = (i - o * (n - 1)) / n;
    this.columnWidth = c;
    r.forEach((t) => {
      t.style.transform = "";
      t.style.marginBottom = "";
    });
    const l = [];
    for (let t = 0; t < n; t++) l[t] = 0;
    const d = [];
    r.forEach((t, s) => {
      const u = parseFloat(getComputedStyle(t).getPropertyValue("--width")) || 1, f = parseFloat(getComputedStyle(t).getPropertyValue("--height")) || 1, h = c * (u / Math.max(u, 1)), m = h * (f / u), g = Math.min(...l), v = l.indexOf(g);
      d.push({ el: t, col: v, y: g, h: m });
      l[v] += m + o;
    });
    const y = Math.max(...l) - o;
    this.container.style.height = y + "px";
    d.forEach(({ el: t, col: s, y: u }) => {
      const f = s * (c + o), h = u;
      t.style.transform = `translate(${f}px, ${h}px)`;
      t.style.position = "absolute";
      t.style.left = "0";
      t.style.top = "0";
      t.style.width = c + "px";
    });
    this.container.style.position = "relative";
  }
  destroy() {
    cancelAnimationFrame(this.raf);
    this.observer && this.observer.disconnect();
    this.mutationObserver && this.mutationObserver.disconnect();
    Array.from(this.container.children).forEach((r) => {
      r.style.transform = "";
      r.style.position = "";
      r.style.left = "";
      r.style.top = "";
      r.style.width = "";
    });
    this.container.style.height = "";
    this.container.style.position = "";
  }
}
class C extends x {
  recalc() {
    const r = Array.from(this.container.children).filter((e) => e.style.display !== "none" && !e.hasAttribute("data-masonry-spacer"));
    if (r.length === 0) return;
    const e = getComputedStyle(this.container), a = e.gridTemplateColumns;
    let n = 0;
    if (a && a !== "none") {
      const t = a.split(" ").filter((s) => s && s !== "0px");
      n = t.length;
    }
    if (n === 0) n = 1;
    this.columns = n;
    const i = this.containerWidth, o = this.gap, c = (i - o * (n - 1)) / n;
    this.columnWidth = c;
    r.forEach((t) => {
      t.style.transform = "";
      t.style.marginBottom = "";
      t.style.position = "";
      t.style.left = "";
      t.style.top = "";
      t.style.width = "";
    });
    // Use CSS grid as base + percentage transforms (library algorithm simplified for vendor)
    const l = [];
    for (let t = 0; t < n; t++) l[t] = 0;
    r.forEach((t) => {
      const u = parseFloat(getComputedStyle(t).getPropertyValue("--width")) || 1, f = parseFloat(getComputedStyle(t).getPropertyValue("--height")) || 1;
      const aspect = f / u;
      t.style.aspectRatio = `${u} / ${f}`;
      const col = l.indexOf(Math.min(...l));
      const prev = l[col];
      l[col] += aspect;
      if (prev > 0) {
        // pull up via translateY percentage relative to own height is handled by library
      }
    });
  }
}
// Original library re-export shape
const M = class extends x {
  constructor(r) {
    super(r);
  }
  recalc() {
    super.recalc();
  }
};
const w = C;
export {
  M as BalancedMasonryGrid,
  x as BaseMasonryGrid,
  w as MasonryGrid,
  C as RegularMasonryGrid
};
