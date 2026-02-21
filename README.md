# Screen Share Test App

A simple web application to test and demonstrate browser-based screen sharing using React and Vite.

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd screen-share-test-app/client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev -- --host
   ```
   - The app will be available at [http://localhost:5173](http://localhost:5173)

---

## 🖥️ Screen Sharing Flow

1. **Home Page:**
   - Click the "Start Screen Share" button.
2. **Browser Prompt:**
   - The browser will prompt you to select a screen, window, or tab to share.
3. **Screen Sharing:**
   - Once selected, your screen will be shared and visible in the app.
   - You can stop sharing at any time using the provided controls.

**Flow Diagram:**
```
User clicks 'Start Screen Share' → Browser permission prompt → User selects screen/window/tab → Screen stream displayed in app → User can stop sharing
```

---

## 📸 Screenshots

### 🏠 Home Page & Screen Picker

<p align="center">
  <img src="https://github.com/user-attachments/assets/fd54d53e-de14-45ce-bdc1-c73be45ad350" width="48%" />
  <img src="https://github.com/user-attachments/assets/51005a34-48f3-4290-b8fe-479dd86bdc49" width="48%" />
</p>

### 🖥️ Live Window

<p align="center">
  <img src="https://github.com/user-attachments/assets/606274e5-6fbb-47b5-83fb-fe84c1e22305" width="70%" />
</p>


---

## ⚠️ Known Limitations & Browser Quirks

- **Browser Support:**
  - Screen sharing is supported in most modern browsers (Chrome, Edge, Firefox, Safari).
  - Some browsers may require HTTPS for screen sharing to work.
- **Permissions:**
  - Users must grant permission to share their screen. If denied, screen sharing will not start.
- **Browser Quirks:**
  - Firefox may show a different permission dialog compared to Chrome.
  - Safari may have limited support or require additional configuration.
- **Mobile Devices:**
  - Screen sharing is generally not supported on mobile browsers.

---

## 📄 License

MIT
