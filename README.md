# Lucid: The dream Journal with a Visual Mood Interpretation
💡 The core concept of this web app is that users write down their dreams. Based on what they write, the app analyzes the tone/mood (via AI) and returns a custom piece of AI-generated art that reflects the emotion, theme, or symbolism of the dream.


## ✅ Features (Planned & Partially Built)

- Add new dream entries (title, date, content, optional tag)
- View dream gallery and details
- Navigate with React Router
- Persist data using localStorage
- Dark, immersive UI inspired by dream aesthetics

---

## 🚧 Status: Paused Due to Multiple Issues

This project has been paused due to compounding issues during development that led to a blank screen and halted progress. Below is a transparent outline of what was built and what went wrong.

---

## 💡 Architecture Overview

- `App.jsx` – Sets up routing for the app.
- `main.jsx` – Wraps the app in `<DreamProvider>` for context access.
- `DreamContext.jsx` – Stores dream data and syncs it to localStorage.
- `DreamEntryForm.jsx` – Form UI for adding new dreams.
- `Gallery.jsx`, `DreamDetail.jsx` – For displaying stored dreams.
- Tailwind used for styling.
- Vite used as build tool and dev server.

---

## 🐛 Issues Faced

### 1. **Blank Screen**
- Despite no red errors, the app rendered a fully black screen.
- Likely culprits:
  - LocalStorage overload crashing rendering cycle.
  - Invalid state update during render (dispatch called directly in render).
  - Possibly corrupted or excessive dream data in localStorage.

### 2. **QuotaExceededError**
- `localStorage.setItem('dreams', ...)` failed due to storing too much data (e.g., large text or too many dreams).
- Blocked further renders and caused silent failure.
- Suggested fix: add try/catch or size-limit dreams — but this was not yet implemented.

### 3. **Dispatch Called During Render**
- The line:
  ```js
  dispatch({ type: 'ADD_DREAM', payload: dream });
