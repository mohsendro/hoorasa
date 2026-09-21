# @masonry-grid/vanilla

This folder is reserved if you later want to vendor the library locally.

Currently the project loads it from jsDelivr CDN as an ESM module only on `project.html`:

```html
<script type="module">
  import { BalancedMasonryGrid } from "https://cdn.jsdelivr.net/npm/@masonry-grid/vanilla@1.1.0/+esm";
  const el = document.querySelector(".project-gallery__masonry");
  if (el) new BalancedMasonryGrid(el);
</script>
```

The library is ESM-only (no UMD/IIFE build). A single page-level `type="module"` script is the supported way without a bundler.

Docs: https://masonry-grid.js.org/
