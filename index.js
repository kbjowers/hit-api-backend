// hit-api-backend/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const HIT_API_KEY = '8677a5fd16f3689908bd4091bc6d78d6';
const CUSTOMER_NUMBER = '139643';

app.use(cors());

app.get('/hit-products', async (req, res) => {
  try {
    const response = await axios.get('https://api.hitpromo.net/api/v1/products', {
      headers: {
        'x-api-key': HIT_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from HIT API:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// JavaScript Document