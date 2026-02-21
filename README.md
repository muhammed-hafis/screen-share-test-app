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

> _Add your own screenshots here. Example placeholders below:_

![Home Page](./client/public/screenshots/home.png)
![Screen Sharing Active](./client/public/screenshots/screen-sharing.png)

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
