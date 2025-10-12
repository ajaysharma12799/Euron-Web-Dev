## CSS units — quick reference

This note summarizes common CSS length units, when to use them, and short examples.

### 1) Absolute length units (fixed)

- px — pixels. Device-dependent but treated as a fixed unit in most web layouts. Good for exact control (borders, icons).
- cm, mm, in — physical units (centimeters, millimeters, inches). Rare on the web; useful for print styles.

Notes:

- Absolute units do not scale with font-size or viewport. Use them when precise, fixed sizing is required.

### 2) Relative length units (fluid / scalable)

- em — relative to the font-size of the element. Useful for component-local scaling (padding, spacing tied to text size).
- rem — relative to the root (html) font-size. Great for consistent scaling across the whole page.
- % — percent. Relative to the parent element's corresponding property (width as percent of parent width, height as percent of parent height).
- vw — 1% of the viewport width.
- vh — 1% of the viewport height.
- vmin / vmax — relative to the smaller / larger of vw and vh.

Notes:

- Relative units are preferred for responsive design.
- Use `rem` for typographic scales and global spacing. Use `em` for components that should scale with the local font-size.

### 3) When to use which

- Layout widths: prefer `%`, `vw`, or relative flexbox/grid sizing.
- Typography: use `rem` (for global scale) and `em` (for component scale).
- Small UI details (1px borders, icon sizes): `px` is fine.
- Full-viewport elements: `100vh` or `100vw` (watch mobile browser UI issues with 100vh).

### 4) Examples

- font-size using rem:

  html { font-size: 16px; }
  h1 { font-size: 2rem; } /_ 32px _/

- spacing using em (relative to element's font-size):

  .btn { font-size: 14px; padding: 0.5em 1em; } /_ padding scales with font-size _/

- responsive width using percent:

  .card { width: 48%; }

- full-screen hero (careful on mobile):

  .hero { height: 100vh; }

### 5) Conversion tips

- 1rem = root font-size (commonly 16px). So 1rem = 16px if html font-size is 16px.
- 1em = current element font-size (so nested elements can multiply sizes).

### Quick cheat-sheet

- Fixed: px
- Scalable — typography: rem (global) / em (local)
- Layout responsiveness: %, vw, vh, vmin, vmax

---
