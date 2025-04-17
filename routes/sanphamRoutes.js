const express = require('express');
const router = express.Router();
const sanphamController = require('../controllers/sanphamController');

// Danh sách
router.get('/products', sanphamController.getAllProducts);

// Thêm mới
router.post('/product', sanphamController.createProduct);

// Cập nhật
router.put('/product/:id', sanphamController.updateProduct);

// Xoá
router.delete('/product/:id', sanphamController.deleteProduct);

module.exports = router;
