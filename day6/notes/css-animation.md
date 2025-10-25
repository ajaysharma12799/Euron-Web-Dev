# 🎞️ CSS Animations — Full Hinglish Guide

CSS Animations ek tarika hai web elements ko **movement, transitions aur interactivity** dene ka — bina JavaScript likhe. Animations se hum UI ko zyada **dynamic aur engaging** bana sakte hain.

---

## 🧠 Two Types of Animations in CSS

1. **Transition** → Ek state se doosri state tak smooth change. (e.g. hover par color change)
2. **Animation** (via `@keyframes`) → Complex multi-step movements. (e.g. move, bounce, rotate)

---

## 🎯 Difference Between `transition` vs `animation`

| Feature | `transition`                                     | `animation`                             |
| ------- | ------------------------------------------------ | --------------------------------------- |
| Trigger | User action (like hover)                         | Automatically (no trigger needed)       |
| Steps   | Only start & end                                 | Multiple keyframes                      |
| Control | Simple, limited                                  | Full control (loop, direction, delay)   |
| Syntax  | `transition: property duration timing-function;` | `@keyframes` + `animation-*` properties |
| Example | Button hover                                     | Moving logo                             |

---

## 💡 1️⃣ CSS `transition`

### 📘 Syntax

```css
.element {
  transition: property duration timing-function delay;
}
```

### ✅ Example

```css
.button {
  background-color: #339af0;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
}

.button:hover {
  background-color: #1c7ed6;
  transform: scale(1.1);
}
```

### 🧠 Explanation

- Hover par color aur size smoothly change hota hai.
- `ease-in-out` smooth start aur end deta hai.

### 🧰 Use Case

Buttons, cards, hover effects, dropdowns.

---

## 💡 2️⃣ CSS `@keyframes` Animation

`@keyframes` se tum define karte ho step-by-step movement.

### 📘 Syntax

```css
@keyframes moveBox {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

.box {
  animation: moveBox 2s ease-in-out infinite;
}
```

### 🧠 Explanation

- 0%, 50%, 100% = start → mid → end positions.
- `animation: <name> <duration> <timing> <iteration-count>;`

### 🔧 Important Animation Properties

| Property                    | Description                     | Example                         |
| --------------------------- | ------------------------------- | ------------------------------- |
| `animation-name`            | `@keyframes` ka naam            | `animation-name: bounce;`       |
| `animation-duration`        | Time for one cycle              | `2s`                            |
| `animation-timing-function` | Speed curve                     | `ease`, `linear`, `ease-in-out` |
| `animation-delay`           | Start delay                     | `1s`                            |
| `animation-iteration-count` | Repeat times                    | `infinite`, `3`                 |
| `animation-direction`       | normal, reverse, alternate      | `alternate` = back and forth    |
| `animation-fill-mode`       | Final frame retain kare ya nahi | `forwards`, `backwards`, `both` |
| `animation-play-state`      | Pause or play                   | `paused`, `running`             |

---

## 💥 Example: Bouncing Ball Animation

```css
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-80px);
  }
}

.ball {
  width: 60px;
  height: 60px;
  background-color: #ff922b;
  border-radius: 50%;
  animation: bounce 1s ease-in-out infinite;
}
```

### 🧠 Key Points

- 0% and 100% represent ball at bottom.
- 50% is top bounce position.
- `infinite` means it keeps looping.

---

## 🪄 Example: Loading Spinner

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #339af0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### 🧠 Concept

- Continuous rotation using `from` → `to`.
- Perfect for loader UI components.

---

## 🕹️ Combining Transitions + Animations

Transitions small UI effects ke liye use karo; animations continuous ya automatic movements ke liye.

### ✅ Example

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
```

### 🧠 Tip

- Hover-type effects ke liye transition prefer karo.
- Decorative ya looping effects ke liye animation use karo.
