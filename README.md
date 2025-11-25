# Weather Search Engine 🌤️

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

A full-stack weather application developed as a technical assessment. It allows users to search for real-time weather data by city name, featuring a polished UI and a performance-optimized backend with server-side caching.

---

# Weather Search Engine 🌤️

[🔴 Live Demo](https://weather-app-eta-sepia-vhwyshj1db.vercel.app)

> A full-stack weather application...

---

## 🚀 Features

- **City Search:** Real-time weather data fetching using the OpenWeatherMap API.
- **Rich UI:** Displays detailed attributes (Temperature, Humidity, Wind Speed, Conditions) using React 19 & Tailwind CSS v4.
- **Performance Optimization:** Backend implements a custom caching mechanism to store vendor responses.
  - **Cache Hit:** Serves data instantly from memory if requested again within the time limit.
  - **Expiry:** Automatically clears old data to ensure freshness.
- **RESTful API:** Clean, standards-compliant API design.

---

## 🛠️ Tech Stack

**Client:**

- React 19
- Vite (Build Tool)
- Tailwind CSS v4
- Axios

**Server:**

- Node.js
- Express v5
- Dotenv (Environment Management)
- Cors

---

## 📂 Project Structure

```bash
root/
├── client/                # Frontend Application (Vite + React)
│   ├── src/
│   └── .env               # Frontend config (VITE_BACKEND_URL)
│
├── server/                # Backend Service (Node + Express)
│   ├── server.js          # App entry point & Caching Logic
│   └── .env               # Backend config (API Keys & Port)
│
└── README.md              # Documentation

```

---

## 🛠 Installation & Running

### Frontend:
```
cd client
npm install
npm run dev
```

### Backend:
```
cd server
npm install
npm run dev
```

### Environment Variables:
Create `.env` inside frontend:

```
VITE_BACKEND_URL="http://localhost:4000"
```
Create `.env` inside backend:

```
PORT=4000
OPENWEATHER_API_KEY=your_actual_api_key_here
```

---

## 🔗 Backend REST API

### GET /api/weather
Fetches current weather details for a given city.

Example Request:
```
http://localhost:4000/api/weather?city=London
```

Sample Response:
```
{
  "source": "cache",
  "name": "London",
  "main": {
    "temp": 18.4,
    "humidity": 65
  },
  "weather": [
    {
      "main": "Clouds",
      "description": "overcast clouds"
    }
  ]
}
```
---

## 🧠 Design Decisions

- Separation of Concerns: The frontend and backend are decoupled, allowing them to be deployed or scaled independently.

- Caching Strategy: To meet performance requirements, I implemented server-side caching. This reduces API calls to the OpenWeatherMap service and speeds up response times for frequently searched cities.

- Tailwind CSS: Used for rapid UI development and responsiveness.

---

## 📄 License
None — This project is for assignment purposes only.