const express = require('express');
const router = express.Router();
const nguoidungController = require('../controllers/nguoidungController');

// Danh sách
router.get('/users', nguoidungController.getAllUsers);

// Đăng ký
router.post('/register', nguoidungController.registerUser);

// Đăng nhập
router.post('/login', nguoidungController.loginUser);

// Cập nhật người dùng (ví dụ admin cập nhật thông tin user)
router.put('/user/:id', nguoidungController.updateUser);

// Xoá người dùng
router.delete('/user/:id', nguoidungController.deleteUser);

module.exports = router;
