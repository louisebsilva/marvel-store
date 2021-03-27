import mysql from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});

db.connect((error) => {
  if (error) throw error;

  console.log('Successfully connect to the database');
});


export default db;
