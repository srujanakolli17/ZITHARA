
const { Client } = require('pg');



const client = new Client({
  user: 'win32',
  host: 'localhost',
  database: 'pg',
  password: 'postgres',
  port: 5432,
});



client.connect()
.then(() => console.log('Connected to PostgreSQL database'))
.catch((err) => console.error('Error connecting to PostgreSQL database:', err));



  client.query('SELECT * FROM your_table', (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('Query result:', result.rows);
    }
  
    // Close the database connection when done
    client.end();
  });


export default App;
  