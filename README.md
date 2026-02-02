# 🎙️ AudioAura Frontend

<p align="center">
  <strong>The frontend for AudioAura — an AI-powered podcast generator.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue.svg"/>
  <img src="https://img.shields.io/badge/Vercel-Deployment-purple.svg"/>
  <img src="https://img.shields.io/badge/Status-Active-success.svg"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

---

## 📌 Overview

**AudioAura Frontend** is the user interface for **AudioAura**, a dynamic web application that automatically generates high-quality podcast episodes using **real-time news and weather** data.

This frontend is built with **React.js**, offering a lightweight, responsive, and intuitive UI for users to:

- Create AI-generated podcast episodes  
- Fetch and review dynamic content  
- Play or download generated audio

This repo handles all **presentation logic**, UI components, and client integration with backend services.

---

## 🚀 Live Demo

🔗 https://audio-aura-dun.vercel.app

---

## 🎧 Features

- 📡 **News & Weather Driven Podcast Generation**  
  Automatically produces relevant episodes based on the latest events and weather.

- ✍️ **Context-Aware AI Script Creation**  
  Dynamic scripts that reflect real world conditions.

- 🗣️ **Text-to-Speech Conversion**  
  High-quality audio output powered by backend AI services.

- ▶️ **Audio Playback & Downloads**  
  Stream or download the generated podcast episodes.

- 📱 **Responsive UI**  
  Works well on mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | **React.js** |
| Styling | CSS / Responsive Layouts |
| Deployment | **Vercel** |
| Backend API | Node.js & AI Podcast Generator backend |
---

## 🚀 Setup & Local Development

1. **Clone the repository**

```bash
git clone https://github.com/Kishore-1803/AudioAura-Frontend.git
cd AudioAura-Frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. **Visit in your browser**
   Open [http://localhost:3000](http://localhost:3000) to view the application live locally.

---

## 📦 Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm start`     | Starts the development server                |
| `npm run build` | Builds the production bundle                 |
| `npm test`      | (Optional) Runs tests                        |
| `npm run eject` | Ejects from create-react-app (if applicable) |

---

## 📌 Connecting to Backend

To fully enable AudioAura features, configure the backend API endpoint in the frontend environment.
Example (in `.env`):

```
REACT_APP_API_BASE_URL=https://your-backend-url.com
```

Ensure the backend service is running and accessible for podcast generation, audio playback, news & weather fetches.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feat/your-feature
```

3. Commit your changes
4. Open a Pull Request with a clear description

---

## 📄 License

This project is licensed under the **MIT License** — see the **LICENSE** file for details.

---

⭐ *If you find AudioAura useful, please give this repository a star!* ⭐
