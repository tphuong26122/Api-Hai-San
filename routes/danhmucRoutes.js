const express = require('express');
const router = express.Router();
const danhmucController = require('../controllers/danhmucController');
// Danh sách
router.get('/categories', danhmucController.getAllCategories);

// Thêm mới
router.post('/category', danhmucController.createCategory);

// Cập nhật
router.put('/category/:id', danhmucController.updateCategory);

// Xoá
router.delete('/category/:id', danhmucController.deleteCategory);

module.exports = router;
