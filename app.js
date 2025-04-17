const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Kết nối MySQL
const db = require('./config/db');
app.use(express.json());

// Router
const danhmucRoutes = require('./routes/danhmucRoutes');
const sanphamRoutes = require('./routes/sanphamRoutes');
const nguoidungRoutes = require('./routes/nguoidungRoutes');

app.use('/api', danhmucRoutes);
app.use('/api', sanphamRoutes);
app.use('/api', nguoidungRoutes);

app.get('/', (req, res) => {
  res.send('Hệ thống bán hải sản đang chạy!');
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
