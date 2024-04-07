const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 5173;

// Endpoint trung gian
app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-03-18&to=2024-03-18&sortBy=popularity&apiKey=242da07b4b7e4b7c8a7ea048be11cf3e');
    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      console.error('Failed to fetch news');
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

// Khởi chạy máy chủ
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});