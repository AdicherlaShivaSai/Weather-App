require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 4000;
const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const CACHE_TTL_MS = 5 * 60 * 1000;
const MAX_CACHE_ENTRIES = 100;

const cache = new Map(); 

function getCacheKey(city) {
  return city.trim().toLowerCase();
}

function getFromCache(key) {
  const entry = cache.get(key);
  if (!entry) return null;

  const isExpired = Date.now() - entry.timestamp > CACHE_TTL_MS;
  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return entry.data;
}

function setCache(key, data) {
  if (cache.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = cache.keys().next().value;
    cache.delete(oldestKey);
  }

  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res
      .status(400)
      .json({ error: "Query parameter 'city' is required." });
  }

  if (!API_KEY) {
    return res
      .status(500)
      .json({ error: "Server not configured: missing API key." });
  }

  const cacheKey = getCacheKey(city);


  const cachedData = getFromCache(cacheKey);
  if (cachedData) {
    return res.json({
      source: "cache",
      ...cachedData, 
    });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    const weatherData = response.data;

    setCache(cacheKey, weatherData);

    return res.json({
      source: "api",
      ...weatherData,
    });
  } catch (err) {
    if (err.response) {
      return res.status(err.response.status).json({
        error: err.response.data?.message || "Error from weather provider.",
      });
    }

    return res
      .status(500)
      .json({ error: "Failed to fetch weather data. Please try again." });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});


app.listen(PORT, () => {
  console.log(`Weather backend listening on port ${PORT}`);
});
