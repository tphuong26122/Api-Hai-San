const mysql = require('mysql2');
require('dotenv').config(); // Để đọc file .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối MySQL:', err);
    return;
  }
  console.log('Kết nối MySQL thành công!');
});

module.exports = connection;