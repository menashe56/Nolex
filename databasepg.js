


{/*

const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
    host: "localhost",
    user:"postgres",
    port:5432,
    password: "123456",
    database: "postgres"
})

client.connect();

app.use(express.json()); // Enable JSON request bodies

app.post('/api/insert', async (req, res) => {
  try {
    const { data } = req.body; // Get the data to insert from the request body
    // Perform the database insertion here
    await client.query('INSERT INTO student VALUES ($1, $2)', [data.value1, data.value2,]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const searchRoll = 23;
const searchName = 'menashe';

const query = {
  text: 'SELECT * FROM public.student WHERE "Roll" = $1 AND "Name" = $2',
  values: [searchRoll, searchName],
};
export default function a(){
client.query(query, (err, result) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Search result:', result.rows);
  }

  client.end();
});
}

client.query('Select * from public.student', (err,res) => {
    if(!err){
        console.log(res.rows)
    }else{
        console.log(err.message)
    }
    client.end
})

client.query('INSERT INTO student VALUES ($1, $2)', [15, 'noam2',], (err,res)=> {
        if (err) {
            console.error('Error executing INSERT query:', err);
          } else {
            console.log('Data inserted successfully.');
          }
          client.end();
    })

*/}

{/*
  node databasepg.js
  */}