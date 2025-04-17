const mysql = require('mysql2');

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối MySQL:', err);
  } else {
    console.log('✅ Đã kết nối tới database Aiven MySQL!');
  }
});

module.exports = connection;