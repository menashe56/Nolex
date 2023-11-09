const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "app"
});

client.connect();

app.use(express.json()); // Enable JSON request bodies

// Define an API endpoint for reading data
app.get('/api/fetch', async (req, res) => {
  try {
    // Fetch data from the PostgreSQL database
    const result = await client.query('SELECT * FROM topics');
    const data = result.rows;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/fetch/:id', async (req, res) => {
    const studentId = req.params.id;
  
    try {
      const result = await client.query('SELECT * FROM topics WHERE id = $1', [studentId]);
      const data = result.rows;
  
      if (data.length === 0) {
        // If no data is found for the specified student ID, return an empty array
        res.status(200).json([]); // Return an empty array instead of a 404 response
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      console.error('Error fetching data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/fetchTopic/:topic', async (req, res) => {
    const topic = req.params.topic; // Use route parameter for topic
  
    try {
      const result = await client.query('SELECT * FROM topics WHERE topics = $1', [topic]);
      const data = result.rows;
  
      if (data.length === 0) {
        // If no data is found for the specified topic, return an empty array
        res.status(200).json([]);
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      console.error('Error fetching data', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
  

app.listen(3000, '10.0.0.14', () => {
  console.log(`Server is running on port 3000`);
});
