# 🌦️ React Weather App

A clean, responsive single-page weather application built with **React.js**.  
It fetches real-time weather data using the **OpenWeatherMap API** and displays the current temperature, condition, and humidity for any searched city.

---

## 🚀 Features

✅ Search any city to get live weather data  
✅ Displays temperature, weather condition, and humidity  
✅ Shows loading indicator during fetch  
✅ Error message for invalid cities  
✅ (Bonus) Remembers last searched city using LocalStorage  

---

## 🧱 Project Structure

```
src/
│
├── components/
│   ├── SearchBar.jsx         # Search input component
│   ├── WeatherDisplay.jsx    # Displays fetched weather data
│
├── App.jsx                   # Main app logic, state handling
├── index.css                 # Tailwind imports
└── main.jsx                  # React entry point
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/react-weather-app.git
cd react-weather-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Get Your API Key from OpenWeatherMap
1. Go to [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up)  
2. Sign up and confirm your email  
3. Visit [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)  
4. Copy your **API key** (it may take 1–2 hours to activate)

---

### 4️⃣ Create a `.env` File in the Root Folder

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> ⚠️ Important: Keys for Vite must start with **VITE_** or they won’t load.

---

### 5️⃣ Run the Project

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser 🚀

---

## 🧠 API Integration Explained

We use Axios to fetch data from:
```
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric
```

**Example Request:**
```js
const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);
```

- **q** → City name entered by user  
- **appid** → Your OpenWeatherMap API key  
- **units=metric** → To show temperature in Celsius  

---

## 🧭 How the App Works

1. User types a city name in the `SearchBar` and clicks “Search”  
2. The app calls the OpenWeatherMap API with that city name  
3. While waiting, a loading spinner shows up  
4. If successful → `WeatherDisplay` shows temperature, condition & humidity  
5. If not found → an error message like “City not found, try again!”  
6. The last searched city is saved in localStorage for convenience  

---

## 🧩 Bonus Features (Optional Enhancements)

- 🌤️ Add 5-Day Forecast using `/forecast` API endpoint  
- 💾 Store multiple recent searches  
- 🕹️ Use Zustand or Redux for advanced state management  

---

## 📸 Demo Preview

![Weather App]([https://via.placeholder.com/800x400?text=Weather+App+Preview](https://weather-app-omega-sandy-56.vercel.app/))

---

## 💡 Common Issues

**Error:** 401 (Unauthorized)  
👉 Cause: API key not yet active or copied incorrectly.  
🔧 Fix: Wait 1–2 hours after account creation and recheck key.

**Error:** City not found  
👉 Cause: Invalid city name input.  
🔧 Fix: Check spelling or try another city.

---

## 🧑‍💻 Tech Stack

- React.js (Vite)
- Tailwind CSS
- Axios
- OpenWeatherMap API
- LocalStorage (bonus)

---

## 📜 License

This project is open-source and free to use for learning or demonstration.

---

### 🌟 Author
**Shiva Adicherla**  
Full Stack Developer | Passionate about building scalable and user-friendly web apps  
[LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
