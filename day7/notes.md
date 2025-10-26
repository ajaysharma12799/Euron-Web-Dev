# CSS Grid — Complete Hinglish Guide (Beginner to Advanced)

---

## 🧠 Introduction

CSS Grid ek **2-Dimensional Layout System** hai.

- Flexbox → 1D (row OR column)
- Grid → 2D (row + column)

Ye mainly use hota hai **complex layouts**, jaise multi-column grids, galleries, dashboards, etc.

---

## ⚙️ Grid Terminology

| Term           | Meaning                                                 |
| -------------- | ------------------------------------------------------- |
| Grid Container | Parent element with `display: grid`                     |
| Grid Item      | Container ke andar ke direct children                   |
| Grid Line      | Horizontal ya vertical lines jo cells define karti hain |
| Grid Track     | Row ya Column space                                     |
| Grid Cell      | Row x Column ka intersection                            |
| Grid Area      | Multiple cells ka combination                           |

---

## 🔹 1) `display: grid`

Grid container banata hai.

```css
.container {
  display: grid;
}
```

---

## 🔹 2) `grid-template-columns` / `grid-template-rows`

Grid ke columns aur rows define karte hain.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 columns fixed width */
  grid-template-rows: 100px 100px; /* 2 rows */
}
```

Fractional units (`fr`) ka use karke responsive grids bante hain:

```css
grid-template-columns: 1fr 2fr 1fr; /* middle column double size */
```

---

## 🔹 3) `gap` (`row-gap`, `column-gap`)

Columns aur rows ke beech spacing.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* row + column gap */
  row-gap: 15px;
  column-gap: 25px;
}
```

---

## 🔹 4) `repeat()` Function

Same size columns ya rows ke liye shortcut.

```css
grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
```

---

## 🔹 5) `auto-fit` vs `auto-fill`

Responsive grids ke liye.

```css
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

- `auto-fit` → Container width ke hisaab se columns fit kare
- `auto-fill` → Extra space me invisible tracks add kare

---

## 🔹 6) Item placement: `grid-column` / `grid-row`

Item ka position define karta hai.

```css
.item1 {
  grid-column: 1 / 3; /* start at col 1, end before col 3 */
  grid-row: 1 / 2; /* start row 1, end before row 2 */
}
```

---

## 🔹 7) `grid-area` (shortcut)

```css
.item {
  grid-area: 1 / 1 / 3 / 4; /* row-start / col-start / row-end / col-end */
}
```

---

## 🔹 8) `grid-template-areas`

Named areas se layout design karna easy hota hai.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 150px 1fr 1fr;
  grid-template-rows: 80px 300px 60px;
  gap: 10px;
}

.header {
  grid-area: header;
  background: #339af0;
}
.sidebar {
  grid-area: sidebar;
  background: #22b8cf;
}
.main {
  grid-area: main;
  background: #51cf66;
}
.footer {
  grid-area: footer;
  background: #845ef7;
}
```

---

## 🔹 9) `justify-items` / `align-items`

Single grid cell ke andar items ko align karta hai.

| Property        | Axis       | Values                           |
| --------------- | ---------- | -------------------------------- |
| `justify-items` | Horizontal | `start` `end` `center` `stretch` |
| `align-items`   | Vertical   | `start` `end` `center` `stretch` |

---

## 🔹 10) `justify-content` / `align-content`

Poore grid container ke andar tracks ko align karta hai.

| Property          | Axis       | Values                                                               |
| ----------------- | ---------- | -------------------------------------------------------------------- |
| `justify-content` | Horizontal | `start` `end` `center` `space-between` `space-around` `space-evenly` |
| `align-content`   | Vertical   | `start` `end` `center` `space-between` `space-around` `space-evenly` |

---

## 🔹 11) `grid-auto-rows` / `grid-auto-columns`

Jab extra items predefined tracks ke bahar place hote hain:

```css
grid-auto-rows: 100px;
grid-auto-columns: 150px;
```

---

## 🔹 12) `minmax()`

Responsive grids me min-max size define karte hain:

```css
grid-template-columns: repeat(3, minmax(150px, 1fr));
```

- Min width = `150px`
- Max width = fraction of remaining space

---

## 🔹 13) Single item alignment

```css
.item {
  justify-self: end; /* horizontal */
  align-self: center; /* vertical */
}
```

---

## 🔹 14) Flexbox vs Grid (Comparison)

| Feature     | Flexbox                   | Grid                         |
| ----------- | ------------------------- | ---------------------------- |
| Dimension   | 1D (row OR column)        | 2D (row + column)            |
| Use-case    | Simple layouts, centering | Complex layouts, dashboards  |
| Alignment   | justify/align             | justify/align + area control |
| Gap Support | Supported                 | Natively supported           |
| Item Order  | yes                       | yes                          |
| Responsive  | easy                      | very powerful                |

---

💡 Rule of Thumb:

- Flexbox = Components ke andar layout
- Grid = Page/Section ke major layout
