# 🎯 CSS Flexbox - Beginner to Advance (in Hinglish)

---

## 🧠 Introduction

Flexbox ek **1-Dimensional Layout System** hai (sirf ek direction me — row ya column). Ye mainly use hota hai jab hume items ko container ke andar **center**, **align**, aur **space distribute** karna hota hai.

---

## ⚙️ Flex Container vs Flex Items

- `display: flex` lagane se element **Flex Container** ban jata hai.
- Uske saare direct children **Flex Items** kehlate hain.

```css
.container {
  display: flex;
}
```

### 🧩 Main Axis & Cross Axis

- **Main Axis**: Flex items jis direction me flow hote hain (default: left → right)
- **Cross Axis**: Main axis ke perpendicular (default: top → bottom)

---

## 🔹 1) `display: flex`

Container ko flex layout me convert karta hai.

```css
.container {
  display: flex;
}
```

---

## 🔹 2) `flex-direction`

Flex items kis direction me arrange honge, ye decide karta hai.

| Value            | Description           |
| ---------------- | --------------------- |
| `row`            | Default, left → right |
| `row-reverse`    | Right → left          |
| `column`         | Top → bottom          |
| `column-reverse` | Bottom → top          |

```css
.container {
  flex-direction: row; /* default */
}
```

🧠 Use Case: Navbar (row), Sidebar layout (column)

---

## 🔹 3) `justify-content`

Main axis ke along items ko align karta hai.

| Value           | Description                 |
| --------------- | --------------------------- |
| `flex-start`    | Items start me              |
| `flex-end`      | Items end me                |
| `center`        | Beech me                    |
| `space-between` | Items ke beech equal space  |
| `space-around`  | Items ke around equal space |
| `space-evenly`  | Overall equal spacing       |

```css
.container {
  justify-content: space-between;
}
```

🧠 Use Case: Navbar items ko evenly space karna

---

## 🔹 4) `align-items`

Cross axis ke along items ko align karta hai (single line).

| Value        | Description                          |
| ------------ | ------------------------------------ |
| `stretch`    | Default (poori cross-axis size fill) |
| `flex-start` | Cross axis ke start me               |
| `flex-end`   | Cross axis ke end me                 |
| `center`     | Cross axis me center                 |
| `baseline`   | Text baseline ke according align     |

```css
.container {
  align-items: center;
}
```

🧠 Use Case: Vertical alignment within header, cards, etc.

---

## 🔹 5) `align-content`

Multi-line flex containers me (jab wrapping on hoti hai) lines ke beech spacing control karta hai.

```css
.container {
  flex-wrap: wrap;
  align-content: space-around;
}
```

---

## 🔹 6) `flex-wrap`

Flex items ko ek hi line me rakhna hai ya wrap karna hai, ye decide karta hai.

| Value          | Description                         |
| -------------- | ----------------------------------- |
| `nowrap`       | Default, sab ek hi line me          |
| `wrap`         | Next line me shift hote hain        |
| `wrap-reverse` | Reverse direction me wrap hote hain |

```css
.container {
  flex-wrap: wrap;
}
```

---

## 🔹 7) `gap`, `row-gap`, `column-gap`

Flex items ke beech spacing dene ke liye.

```css
.container {
  display: flex;
  gap: 20px; /* same for row-gap & column-gap if needed */
}
```

---

## 🔹 8) `flex-flow` (shorthand)

`flex-direction` + `flex-wrap` ka shorthand.

```css
.container {
  flex-flow: row wrap;
}
```

---

## 🔹 9) `align-self`

Single flex item ko cross-axis alignment individually set karta hai.

```css
.item {
  align-self: flex-end;
}
```

---

## 🔹 10) `order`

Flex items ka visual order change karta hai (DOM order same rehta hai).

```css
.item1 {
  order: 2;
}
.item2 {
  order: 1;
}
```

🧠 Use Case: Responsive layouts me mobile view ke liye order change karna.

---

## 🔹 11) `flex-grow`, `flex-shrink`, `flex-basis`

In teeno se har flex item ka size control hota hai.

| Property      | Description                   |
| ------------- | ----------------------------- |
| `flex-grow`   | Free space kitna occupy kare  |
| `flex-shrink` | Shrink hone ka ratio          |
| `flex-basis`  | Initial size (before flexing) |

### Example

```css
.item1 {
  flex-grow: 1;
}
.item2 {
  flex-grow: 2;
}
```

🧠 Use Case: Kisi element ko 2x space dena compared to others.

---

## 🔹 12) `flex` (shorthand)

Shortcut for → `flex-grow` `flex-shrink` `flex-basis`.

```css
.item {
  flex: 1 1 200px; /* grow | shrink | basis */
}
```
